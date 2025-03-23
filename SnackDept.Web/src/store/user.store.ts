import { inject } from '@angular/core';
import { withDevtools, withStorageSync } from '@angular-architects/ngrx-toolkit';
import { signalState, signalStore, withMethods, withState } from '@ngrx/signals';
import { MessageService } from 'primeng/api';

import {
  UserDto,
  CreateUserDto,
  UpdateUserDto,
  DeleteUserDto,
  CreateDeptDto,
  UpdateDeptDto,
  DeleteDeptDto,
} from '../app/api/models';
import { SnackDeptApiServiceService } from '../app/api/services';
import { TranslateService } from '../services/translate.service';
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
      messageService = inject(MessageService),
      translations = inject(TranslateService).translations
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
            detail: translations.user_error_load(),
          });
        }
      },
      async addUser(createUserDto: CreateUserDto): Promise<boolean> {
        const response = await snackService.snackDeptApiServiceEndpointsUserCreateEndpoint({
          body: createUserDto,
        });
        if (response.status === 201) {
          this.loadUser();
          messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: translations.user_success_add(),
          });
          return true;
        } else {
          messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: translations.user_error_add(),
          });
          return false;
        }
      },
      async updateUser(updateUserDto: UpdateUserDto): Promise<boolean> {
        const response = await snackService.snackDeptApiServiceEndpointsUserUpdateEndpoint({
          body: updateUserDto,
        });
        if (response.status === 204) {
          this.loadUser();
          messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: translations.user_success_update(),
          });
          return true;
        } else {
          messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: translations.user_error_update(),
          });
          return false;
        }
      },
      async deleteUser(deleteUserDto: DeleteUserDto): Promise<boolean> {
        const response = await snackService.snackDeptApiServiceEndpointsUserDeleteEndpoint({
          body: deleteUserDto,
        });
        if (response.status === 204) {
          this.loadUser();
          messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: translations.user_success_delete(),
          });
          return true;
        } else {
          messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: translations.user_error_delete(),
          });
          return false;
        }
      },
      async addDept(createDeptDto: CreateDeptDto): Promise<boolean> {
        const response = await snackService.snackDeptApiServiceEndpointsDeptCreateEndpoint({
          body: createDeptDto,
        });
        if (response.status === 201) {
          this.loadUser();
          messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: translations.dept_success_add(),
          });
          return true;
        } else {
          messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: translations.dept_error_add(),
          });
          return false;
        }
      },
      async updateDept(updateDeptDto: UpdateDeptDto): Promise<boolean> {
        const response = await snackService.snackDeptApiServiceEndpointsDeptUpdateEndpoint({
          body: updateDeptDto,
        });
        if (response.status === 204) {
          this.loadUser();
          messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: translations.dept_success_update(),
          });
          return true;
        } else {
          messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: translations.dept_error_update(),
          });
          return false;
        }
      },
      async deleteDept(deleteDeptDto: DeleteDeptDto): Promise<boolean> {
        const response = await snackService.snackDeptApiServiceEndpointsDeptDeleteEndpoint({
          body: deleteDeptDto,
        });
        if (response.status === 204) {
          this.loadUser();
          messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: translations.dept_success_delete(),
          });
          return true;
        } else {
          messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: translations.dept_error_delete(),
          });
          return false;
        }
      },
    })
  )
);
