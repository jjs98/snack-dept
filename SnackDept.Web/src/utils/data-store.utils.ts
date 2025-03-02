import { WritableStateSource, patchState } from '@ngrx/signals';
import { Prettify } from '@ngrx/signals/src/ts-helpers';
import { Draft, produce } from 'immer';

export function patch<TState extends object>(
  stateSignal: WritableStateSource<TState>,
  func: (draft: Draft<Prettify<TState>>) => void
): void {
  patchState(stateSignal, x => produce(x, func));
}
