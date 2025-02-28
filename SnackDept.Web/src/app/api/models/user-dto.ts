import type { DeptDto } from './dept-dto';

export type UserDto = {
    id?: number;
    name?: string;
    depts?: (DeptDto)[];
  };
