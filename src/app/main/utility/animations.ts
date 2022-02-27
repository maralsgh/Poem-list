import {trigger, style, animate, transition, state} from '@angular/animations';


export const transitionAnimation = trigger('fade', [
  state('in', style({opacity: 1})),

  transition(':enter', [
    style({ opacity: 0 }),
    animate(2000, style({opacity: 1}))
  ]),

  transition(':leave',
    animate(600, style({opacity: 0})))

])
