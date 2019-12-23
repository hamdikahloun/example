import React, { memo } from "react";
import { FlatList } from "react-native";
import { Button, Screen } from "../../../../components";
import { ColorTheme, changeTheme } from "../../../../models";
import { useRootDispatch, useRootSelector } from "../../../../utils";
import { useNav } from "../../../../hooks";

export default memo(function PortfolioSettings() {
  const dispatch = useRootDispatch();
  const themes = Object.values(ColorTheme);
  const currentTheme = useRootSelector(state => state.theme.currentColor);
  const nav = useNav();
  const themePress = (theme: ColorTheme) => () => dispatch(changeTheme(theme));
  return (
    <Screen onLeftPress={nav.to("portfolioLanding")} title="Settings">
      <FlatList
        ListHeaderComponent={() => <Button disable title="Theme" />}
        horizontal
        keyExtractor={item => item}
        data={themes}
        renderItem={({ item }) => 
          <Button
            key={item}
            title={item}
            onPress={themePress(item)}
            contained={currentTheme === item}
            secondary={currentTheme !== item}
          />
        }
      />
    </Screen>
  );
});
