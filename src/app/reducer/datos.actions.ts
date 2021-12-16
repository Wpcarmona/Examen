import { createAction, props } from '@ngrx/store';


export const datos = createAction('saltar',
    props<{ image: string}>()
);