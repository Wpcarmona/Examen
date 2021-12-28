import { Action, createReducer, on } from '@ngrx/store';
import * as states from './datos.actions';

//------------imagen-------------//

export const init = '';

const _counterRedu = createReducer(
  init,
  on(states.imagen, (state, { comments }) => comments),
  on(states.imagen, (state, { likes }) => likes),
  on(states.imagen, (state, { donwloads }) => donwloads),
  on(states.imagen, (state, { imagen }) => imagen)
);

export function countRedu(state, action: Action) {
  return _counterRedu(state, action);
}

//------------Juego-------------//

export interface State {
  speed: number;
  w: number;
  h: number;
  color: string;
}

export const initialState: State = {
  speed: 1,
  w: 40,
  h: 80,
  color: 'red',
};

const _mainReducer = createReducer(
  initialState,
  on(states.normal, (state) => ({ speed: 1, w: 50, h: 100, color: 'red' })),
  on(states.speed, (state, { s }) => ({
    speed: s,
    w: 50,
    h: 100,
    color: 'blue',
  })),
  on(states.slow, (state, { s }) => ({
    speed: s,
    w: 50,
    h: 100,
    color: 'green',
  }))
);

export function mainReducer(state: State, action: Action) {
  return _mainReducer(state, action);
}
