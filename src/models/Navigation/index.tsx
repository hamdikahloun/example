import { ActionType, createStandardAction, getType } from "typesafe-actions";
import { RootAction, RootState } from "../../containers";

// interfaces
export enum NavigationScreen {
  PortfolioNotFound = "PortfolioNotFound",
  PortfolioMain = "PortfolioMain",
  PortfolioLanding = "PortfolioLanding",
  PortfolioLogin = "PortfolioLogin",
  PortfolioForgotPassword = "PortfolioForgotPassword",
  Debug = "Debug",
  DebugBall = "DebugBall",
  DebugButtons = "DebugButtons",
  DebugCards = "DebugCards",
  DebugChat = "DebugChat",
  DebugDrag = "DebugDrag",
  DebugFonts = "DebugFonts",
  DebugImageCollection = "DebugImageCollection",
  DebugInput = "DebugInput",
  DebugOKRs = "DebugOKRs",
  DebugPinchSpread = "DebugPinchSpread",
  DebugQuestionnaire = "DebugQuestionnaire",
  DebugSearchBar = "DebugSearchBar",
  DebugStopwatch = "DebugStopwatch",
  CantHurtMeHome = "CantHurtMeHome",
  ChecklistsList = "ChecklistsList",
  ChecklistsListCreate = "ChecklistsListCreate",
  ChecklistsListUpdate = "ChecklistsListUpdate",
  ChecklistsLists = "ChecklistsLists",
  ChecklistsItemCreate = "ChecklistsItemCreate",
  ChecklistsItemUpdate = "ChecklistsItemUpdate"
}

export enum NavigationModal {
  None = "None",
  CantHurtMeProfile = "CantHurtMeProfile",
  CantHurtMeSettings = "CantHurtMeSettings"
}

export interface NavigationState {
  modal: NavigationModal;
  screen: NavigationScreen;
}

export type NavigationActions = ActionType<
  typeof navigate | typeof showModal | typeof hideModal
>;

// actions
export const navigate = createStandardAction("navigation/CHANGE_NAVIGATION")<
  NavigationScreen
>();
export const showModal = createStandardAction("navigation/SHOW_MODAL")<
  NavigationModal
>();
export const hideModal = createStandardAction("navigation/HIDE_MODAL")();

// selectors
export const getScreen = (state: RootState): NavigationScreen =>
  state.navigation.screen;
export const getModal = (state: RootState): NavigationModal =>
  state.navigation.modal;

// reducers
export const navigationInitialState: NavigationState = {
  modal: NavigationModal.None,
  screen: NavigationScreen.PortfolioLanding
};
export function navigationReducer(
  state: NavigationState = navigationInitialState,
  action: RootAction
): NavigationState {
  switch (action.type) {
    case getType(navigate):
      return {
        ...state,
        screen: action.payload
      };
    case getType(showModal):
      return {
        ...state,
        modal: action.payload
      };
    case getType(hideModal):
      return {
        ...state,
        modal: NavigationModal.None
      };
    // case getType(logout): // TODO:
    //   return navigationInitialState;
    default:
      return state;
  }
}