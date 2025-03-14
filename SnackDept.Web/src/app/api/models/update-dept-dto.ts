export type UpdateDeptDto = {
    id: number;
    reason?: (string) | (null);
    description?: (string) | (null);
    amount?: number;
    userId?: number;
    deptDate: string;
    redemptionDate?: (string) | (null);
  };
