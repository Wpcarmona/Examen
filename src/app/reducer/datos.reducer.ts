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