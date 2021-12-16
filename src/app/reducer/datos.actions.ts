import { createAction, props } from '@ngrx/store';


export const datos = createAction('saltar',
    props<{ image: string}>()
);

export const normal = createAction('Normal');
export const speed = createAction('speed', props<{s: number}>())
export const slow = createAction('slow', props<{s: number}>())