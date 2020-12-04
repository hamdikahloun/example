import React, {memo} from 'react';
import {ScrollView} from 'react-native';
import {Card, Screen, Text} from '../../components';
import {useColor} from '../../hooks';
import {Theme} from '../../utils';

// TODO: figure out a place for this
// TODO: add reminders
// TODO: add profile information
// TODO: add payment

export const Account = memo(function Account() {
  const color = useColor();

  return (
    <Screen title="Account">
      <ScrollView
        contentContainerStyle={{
          padding: Theme.padding.p04,
          backgroundColor: color.surface,
        }}>
        <Card>
          <Text
            center
            style={{paddingBottom: Theme.padding.p04}}
            title="Try something new every day"
            type="h3"
          />
          <Text
            center
            emphasis="medium"
            title="Break comfort barriers to be more creative, better at dealing with change, and better a improving the future"
            type="h4"
          />
        </Card>
      </ScrollView>
    </Screen>
  );
});