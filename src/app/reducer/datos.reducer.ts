import { Action } from "@ngrx/store";



export function ImageReducer( state:string, action:Action) {
    switch(action.type){
        case 'SELECTED':
            return state;
        default:
            return state;
    }
}