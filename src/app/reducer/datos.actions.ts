import { createAction, props } from '@ngrx/store';

export const normal = createAction('Normal');
export const speed = createAction('speed', props<{ s: number }>());
export const slow = createAction('slow', props<{ s: number }>());
export const imagen = createAction(
  'Saltar',
  props<{
    imagen: string;
    likes: string;
    comments: string;
    donwloads: string;
  }>()
);
