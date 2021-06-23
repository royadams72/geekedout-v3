import { createReducer, on, Action } from '@ngrx/store';
import { ScreenActions } from '../actions';


export interface ScreenState {
    small: boolean;
    medium: boolean;
    large: boolean;
  };

  export const initialState: ScreenState = {
    small: false,
    medium: false,
    large: false,
  };
    const SMALL_VIEW_WIDTH = 325;  //Adjust as needed
    const MEDIUM_VIEW_WIDTH = 640; //Adjust as needed

  export const appReducer = createReducer(
    initialState,
    on(ScreenActions.setScreen, setScreen)
    );
    function setScreen(state: ScreenState, action: any): ScreenState {
        const width = action.windowWidth;
        const small = width <= SMALL_VIEW_WIDTH ;
        const medium = width <= MEDIUM_VIEW_WIDTH && width > SMALL_VIEW_WIDTH;
        const large = !small && !medium;
        return { small, medium, large  };
      }

    export function reducer(state: ScreenState | undefined, action: Action): ScreenState {
        return appReducer(state, action);
    }