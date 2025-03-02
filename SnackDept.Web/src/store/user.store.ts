import { inject } from '@angular/core';
import { withDevtools, withStorageSync } from '@angular-architects/ngrx-toolkit';
import { signalState, signalStore, withMethods, withState } from '@ngrx/signals';
import { MessageService } from 'primeng/api';

import { UserDto } from '../app/api/models';
import { SnackDeptApiServiceService } from '../app/api/services';
import { patch } from '../utils/data-store.utils';

type UserState = { user: UserDto[] };

const userState = signalState<UserState>({
  user: [],
});

export const UserStore = signalStore(
  { providedIn: 'root' },
  withDevtools('UserStore'),
  withStorageSync('user'),
  withState(userState),
  withMethods(
    (
      store,
      snackService = inject(SnackDeptApiServiceService),
      messageService = inject(MessageService)
    ) => ({
      setUser(user: UserDto[]): void {
        patch(store, draft => {
          draft.user = user;
        });
      },
      async loadUser(): Promise<void> {
        const response = await snackService.snackDeptApiServiceEndpointsUserGetFullEndpoint();
        if (response.status === 200) {
          this.setUser(response.body ?? []);
        } else {
          this.setUser([]);
          messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Error loading users',
          });
        }
      },
    })
  )
);
