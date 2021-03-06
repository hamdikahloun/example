import dayjs, {Dayjs} from 'dayjs';
import React, {memo, useCallback, useState} from 'react';
import {FlatList, View} from 'react-native';
import {Icon, Text, TouchableOpacity} from '../../components';
import {useColor} from '../../hooks';
import {config} from '../../utils';

const generateHistory = () => {
  const data = [];
  for (let i = 2; i >= -20; i--) data.push({date: dayjs().add(i, 'day')});

  return data;
};

type Item = {
  date: Dayjs;
};

type ProgressItemProps = {
  item: Item;
};

const ProgressItem = ({item}: ProgressItemProps) => {
  const color = useColor();
  const [dateFormat, setDateFormat] = useState('ddd');
  const onPress = useCallback(() => {
    setDateFormat((prev) => (prev === 'ddd' ? 'MMM DD' : 'ddd'));
  }, []);
  const iconColor = item.date.isSame(dayjs(), 'day')
    ? color.success
    : item.date > dayjs()
    ? color.secondary
    : color.danger;
  const iconName = item.date.isSame(dayjs(), 'day')
    ? 'check'
    : item.date > dayjs()
    ? 'cancel'
    : 'close';

  return (
    <TouchableOpacity onPress={onPress}>
      <Icon color={iconColor} name={iconName} style={{alignSelf: 'center'}} />
      <View
        style={{
          borderTopColor: color.text,
          borderTopWidth: 2,
          margin: config.padding(1),
          width: config.padding(12),
        }}>
        <Text center title={item.date.format(dateFormat)} />
      </View>
    </TouchableOpacity>
  );
};

export const DailyProgress = memo(function DailyProgress() {
  const data: Item[] = generateHistory();

  const renderItem = useCallback(({item}) => <ProgressItem item={item} />, []);

  const keyExtractor = useCallback((item: Item) => String(item.date), []);

  return (
    <FlatList
      data={data}
      horizontal
      inverted
      keyExtractor={keyExtractor}
      keyboardShouldPersistTaps="handled"
      renderItem={renderItem}
    />
  );
});
