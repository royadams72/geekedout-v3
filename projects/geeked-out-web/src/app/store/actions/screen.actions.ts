import { createAction, props } from '@ngrx/store';

export const setScreen = createAction(`[getScreen] Get Screen Size`, props<{ windowWidth: number }>());

export type ScreenActionsUnion = ReturnType<typeof setScreen>;