import {createSelector} from 'reselect';
import {ActionType, createAction, getType} from 'typesafe-actions';
import {RootAction, RootState} from '../../../providers';
import {removeUser} from './User';

/* ACTIONS */
export const createBoard = createAction('complete/board/create')<Board>();
export const updateBoard = createAction('complete/board/update')<Board>();
export const removeBoard = createAction('complete/board/remove')<string>();
export const setActiveBoard = createAction(
  'complete/board/setActive',
)<string>();

/* SELECTORS */
export const getBoards = (state: RootState): Boards =>
  state.completeBoard.items;
export const getCurrentBoard = (state: RootState): Board => {
  const active = state.completeBoard.active;
  if (!active) {
    throw new Error('missing current item');
  }
  return state.completeBoard.items[active];
};
export const getActiveBoardOrderByCreatedAt = createSelector(
  [getBoards],
  (items) =>
    Object.values(items)
      .filter((item) => item.active)
      .sort((a, b) => a.createdAt - b.createdAt),
);

/* INTERFACES */
export type CompleteBoardReducer = {
  active: string | undefined;
  items: Boards;
};
export type Board = {
  id: string;
  title: string;
  active: boolean;
  createdAt: number;
  updatedAt: number;
  lists: ReadonlyArray<string>;
};
export type Boards = {[key: string]: Board};
export type CompleteBoardActions = ActionType<
  | typeof createBoard
  | typeof removeBoard
  | typeof updateBoard
  | typeof setActiveBoard
>;

/* REDUCER */
const initialState: CompleteBoardReducer = {
  active: undefined,
  items: {},
};
export const completeBoardReducer = (
  state: CompleteBoardReducer = initialState,
  action: RootAction,
): CompleteBoardReducer => {
  switch (action.type) {
    case getType(setActiveBoard):
      return {...state, active: action.payload};
    case getType(createBoard):
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: action.payload,
        },
      };
    case getType(updateBoard):
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: {
            ...state.items[action.payload.id],
            ...action.payload,
            updatedAt: Date.now(),
          },
        },
      };
    case getType(removeBoard):
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload]: {
            ...state.items[action.payload],
            active: false,
            updatedAt: Date.now(),
          },
        },
      };
    case getType(removeUser):
      return initialState;
    default:
      return state;
  }
};