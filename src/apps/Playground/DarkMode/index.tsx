// TODO: slider on web
import {useNavigation} from '@react-navigation/native';
import React, {memo, useCallback, useState} from 'react';
import {Image, ImageSourcePropType, View} from 'react-native';
import {Button, Card, Masonry, Screen, Slider, Text} from '../../../components';
import {ScrollView} from '../../../conversions';
import {useColor} from '../../../hooks';
import {
  changeTheme,
  ColorTheme,
  colorThemes,
  getLandscapeOrientation,
} from '../../../models';
import {config, useRootDispatch, useRootSelector} from '../../../utils';

interface Card {
  title: string;
  value: string;
  target?: string;
  chart?: ImageSourcePropType;
  button?: string;
}

const image = require('../../../assets/placeholder.png');
const cards: Card[] = [
  {
    title: 'Marketing',
    value: '12.4 M',
  },
  {
    target: '+22% of target',
    title: 'Conversion',
    value: '537',
  },
  {
    chart: image,
    target: '+12.3 of target',
    title: 'Conversion',
    value: '42.1 M',
  },
  {
    target: '11% of target',
    title: 'Sales',
    value: '35.8 M',
    chart: image,
  },
  {
    button: 'view',
    title: 'Users',
    value: '45.5 M',
  },
  {
    target: '+56.6% of target',
    title: 'Avg session',
    value: '4:53 H',
  },
  {
    title: 'Sessions',
    value: '23.242',
  },
  {
    title: 'Bounce rate',
    value: '12%',
  },
  {
    title: 'Churn',
    value: '8%',
    target: '+45.1 of target',
    button: 'view',
  },
  {
    title: 'Spend',
    value: '18.4 M',
  },
];

export const DarkMode = memo(function DarkMode() {
  const dispatch = useRootDispatch();
  const color = useColor();
  const {goBack} = useNavigation();
  const currentTheme = useRootSelector((state) => state.theme.currentColor);
  const themePress = (theme: ColorTheme) => () => dispatch(changeTheme(theme));
  const [elevation, setElevation] = useState(2);
  const handleSlider = useCallback((value: number) => setElevation(value), []);
  const landscape = useRootSelector(getLandscapeOrientation);
  const columns = landscape ? 5 : 2;
  const onPress = useCallback(() => undefined, []);

  const renderItem = useCallback(
    ({item, index}) => (
      <Card elevation={elevation} key={index} onPress={onPress}>
        <Text title={item.title} type="overline" />
        <Text
          style={{marginTop: config.padding(2)}}
          title={item.value}
          type="h4"
        />
        {item.target && (
          <Text
            style={{marginTop: config.padding(2)}}
            title={item.target}
            type="body2"
          />
        )}
        {item.chart && (
          <Image
            source={item.chart}
            style={{
              height: 100,
              marginTop: config.padding(2),
              resizeMode: 'cover',
              width: '100%',
            }}
          />
        )}
        {item.button && (
          <Button
            buttonStyle={{marginTop: config.padding(2)}}
            center
            color="primary"
            emphasis="high"
            title={item.button}
          />
        )}
      </Card>
    ),
    [elevation, onPress],
  );

  const navBack = useCallback(() => goBack(), [goBack]);
  return (
    <Screen dropShadow onLeftPress={navBack} title="Dark mode">
      <ScrollView style={{backgroundColor: color.surface}}>
        <View style={{padding: config.padding(4)}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text title="theme: " />
            {colorThemes.map((item) => (
              <Button
                color={currentTheme === item ? 'primary' : 'text'}
                emphasis="high"
                key={item}
                onPress={themePress(item)}
                title={item}
              />
            ))}
          </View>
          <Text title={`elevation: ${elevation}`} />
          <Slider
            maximumValue={10}
            minimumTrackTintColor={color.primary}
            minimumValue={0}
            onValueChange={handleSlider}
            step={1}
            value={elevation}
          />
        </View>
        <Text center title="Weekly Stats" type="h2" />
        <Masonry data={cards} numColumns={columns} renderItem={renderItem} />
      </ScrollView>
    </Screen>
  );
});
