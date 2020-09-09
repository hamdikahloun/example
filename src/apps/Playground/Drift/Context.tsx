import {createContext} from 'react';
import {TrackPosition, TrackPositionWithColor} from './Tracks';
import {ColorChoice} from './Dpad';

export type DriftState = {
  tracks: TrackPositionWithColor[];
  color: ColorChoice;
};

export const driftInitialState: DriftState = {
  tracks: [],
  color: 'lightgrey',
};

type Action =
  | {type: 'addColor'; payload: ColorChoice}
  | {type: 'addTrack'; payload: TrackPosition};

export const driftReducer = (state: DriftState, action: Action): DriftState => {
  switch (action.type) {
    case 'addColor':
      return {...state, color: action.payload};
    case 'addTrack': {
      const tracks = [...state.tracks];
      while (tracks.length > 10) {
        tracks.pop();
      }
      return {
        ...state,
        tracks: [{...action.payload, color: state.color}, ...tracks],
      };
    }
    default:
      return state;
  }
};

type Context = {
  state: DriftState;
  dispatch: (action: Action) => void;
};

export const DriftContext = createContext<Context>({
  state: driftInitialState,
  dispatch: () => undefined,
});