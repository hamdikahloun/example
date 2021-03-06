import {useNavigation} from '@react-navigation/native';
import React, {memo, useCallback} from 'react';
import {Button, Modal, Text} from '../../../../components';
import {useColor} from '../../../../hooks';
import {config, useRootDispatch} from '../../../../utils';
import {Card} from '../../components';
import {createItem, createUser, removeUser, setActiveUser} from '../../models';
import {getDefaultUserTemplate} from '../../utils/';

// TODO: figure out a place for this
// TODO: add reminders
// TODO: add profile information
// TODO: add payment

export const Account = memo(function Account() {
  const color = useColor();
  const dispatch = useRootDispatch();
  const {goBack, navigate} = useNavigation();
  const navBack = useCallback(() => goBack(), [goBack]);

  const onLogin = useCallback(() => {
    const {user, items} = getDefaultUserTemplate();
    items.map((item) => dispatch(createItem(item)));
    dispatch(createUser(user));
    navigate('main');
  }, [dispatch, navigate]);
  const onLogout = useCallback(() => {
    dispatch(removeUser());
    navigate('main');
  }, [dispatch, navigate]);
  const onSetActive = useCallback(() => {
    dispatch(setActiveUser(true));
  }, [dispatch]);

  const onNavToAdmin = useCallback(() => navigate('admin'), [navigate]);

  return (
    <Modal backgroundColor={color.surface} onBackgroundPress={navBack}>
      <Card margin="bottom">
        <Text
          emphasis="low"
          style={{paddingBottom: config.padding(4)}}
          title="Profile"
          type="h5"
        />
        <Text center emphasis="medium" title="..." type="h4" />
      </Card>
      <Card margin="bottom">
        <Text
          emphasis="low"
          style={{paddingBottom: config.padding(4)}}
          title="Reminders"
          type="h5"
        />
        <Text center emphasis="medium" title="..." type="h4" />
      </Card>
      <Card margin="bottom">
        <Text
          emphasis="low"
          style={{paddingBottom: config.padding(4)}}
          title="Payment"
          type="h5"
        />
        <Text center emphasis="medium" title="..." type="h4" />
      </Card>
      <Card margin="bottom">
        <Text
          emphasis="low"
          style={{paddingBottom: config.padding(4)}}
          title="Feedback"
          type="h5"
        />
        <Text center emphasis="medium" title="..." type="h4" />
      </Card>
      <Button onPress={onLogin} title="login" />
      <Button onPress={onLogout} title="logout" />
      <Button onPress={onSetActive} title="set active" />
      <Button onPress={onNavToAdmin} title="go to admin" />
    </Modal>
  );
});
