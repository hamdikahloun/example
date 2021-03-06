import {useNavigation} from '@react-navigation/native';
import React, {memo, useCallback, useRef, useState} from 'react';
import {LayoutChangeEvent} from 'react-native';
import {Button, KeyboardHandler, Screen} from '../../../../components';
import {useColor} from '../../../../hooks';
import {config, useRootSelector} from '../../../../utils';
import {Card, List} from '../../components';
import {getInbox} from '../../models';
import {useKeyboardHeight} from '../../utils/useKeyboardHeight';

const initialState = {container: 0, button: 0, size: 0};
export const Capture = memo(function Capture() {
  const color = useColor();
  const {navigate} = useNavigation();
  const containerRefs = useRef(initialState);
  const keyboardHeight = useKeyboardHeight();
  const [containerHeight, setContainerHeight] = useState(0);
  const keyboardPadding = config.padding(keyboardHeight ? 11 : 48);
  const maxHeight = containerHeight - keyboardHeight - keyboardPadding;

  const itemId = useRootSelector(getInbox);
  if (!itemId) throw new Error('missing item id');
  const noItemChildren = useRootSelector(
    (s) => s.completeItem.items[itemId].children.length === 0,
  );

  const onOrganize = useCallback(() => undefined, []);

  const onLayout = useCallback(
    (key: keyof typeof initialState) => (event: LayoutChangeEvent) => {
      const {height} = event.nativeEvent.layout;
      if (!containerRefs.current[key]) containerRefs.current[key] = height;
      const {container, button, size} = containerRefs.current;
      if (container > 0 && button > 0 && !size) {
        const dimensions = container - button;
        setContainerHeight(dimensions);
        containerRefs.current.size = dimensions;
      }
    },
    [],
  );

  const navToAccount = useCallback(() => navigate('account'), [navigate]);

  return (
    <Screen onRightPress={navToAccount} rightIcon="account" title="Plan">
      <KeyboardHandler
        backgroundColor={color.surface}
        onLayout={onLayout('container')}>
        <List
          footer={
            <Card onLayout={onLayout('button')}>
              <Button
                center
                color="primary"
                disable={noItemChildren}
                onPress={onOrganize}
                title="Organize"
              />
            </Card>
          }
          itemId={itemId}
          maxHeight={maxHeight}
          parentItemId={null}
        />
      </KeyboardHandler>
    </Screen>
  );
});
