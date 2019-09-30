import React, { memo, useCallback, useState } from "react";
import { Dialog, Screen, Text } from "../../components";
import { navigate, NavigationScreen } from "../../models";
import { useRootDispatch } from "../../utils";
import { List } from "./components/List";

// TODO: scroll to current index
// TODO: migrate all dialogs to Dialogs (remove modals from navigation layer)
// TODO: batch item list
// TODO: handle modals
// TODO: flatlist on web
// TODO: refresh every hour
// TODO: convert hours to minutes to config 15, 30, 60, 120

export default memo(function Focus() {
  const dispatch = useRootDispatch();
  const [modalItemEdit, setModalItemEdit] = useState(false);
  const [modalProfile] = useState(false);
  const [modalLogin] = useState(false);
  const nav = (to: NavigationScreen) => () => dispatch(navigate(to));
  const handleItemPress = useCallback(() => {
    // flatList.scrollToIndex(20);
    setModalItemEdit(edit => !edit);
  }, []);
  const handleModalEditBackgroundPress = useCallback(() => {
    setModalItemEdit(false);
  }, []);

  return (
    <>
      <Screen onLeftPress={nav("portfolioLanding")} disableScroll>
        <Text h1 title="fc" center />
        <List onItemPress={handleItemPress} />
      </Screen>
      {modalItemEdit && (
        <Dialog
          duration={2000}
          testID="editItem"
          title="hello"
          onBackgroundPress={handleModalEditBackgroundPress}
        />
      )}
      {modalProfile && (
        <Dialog
          testID="editItem"
          title="hello"
          onBackgroundPress={handleModalEditBackgroundPress}
        />
      )}
      {modalLogin && (
        <Dialog
          testID="editItem"
          title="hello"
          onBackgroundPress={handleModalEditBackgroundPress}
        />
      )}
    </>
  );
});