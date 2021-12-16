import { Action, createReducer, on } from "@ngrx/store";
import * as states from './datos.actions';


export const initial = "";

const _counterReducer = createReducer(
    initial,
    on(states.datos, (state, {image}) => image)
);


export function counterReducer(state: string | undefined, action: Action){
    return _counterReducer(state, action)
}


export interface State{
    speed: number;
    w: number;
    h: number;
    color: string;
}

export const initialState: State = {
    speed: 1,
    w: 40,
    h: 80,
    color: "red"
}

const _mainReducer = createReducer(
    initialState,
    on(states.normal,(state) => ({speed: 1, w:50, h:100, color:'red'})),
    on(states.speed,(state, {s}) => ({speed: s, w:50, h:100, color:'blue'})),
    on(states.slow,(state, {s}) => ({speed: s, w:50, h:100, color:'green'})),
);

export function mainReducer(state: State | undefined, action: Action){
    return _mainReducer(state, action)
}
