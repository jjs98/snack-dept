import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import type { UserDto } from '../user-dto';

type SnackDeptApiServiceEndpointsUserGetEndpointStatusCodes =
  | (200)
  | (401)
  | (403)
  | (500);
/**
 * Response model for operation snackDeptApiServiceEndpointsUserGetEndpoint
 */
export type SnackDeptApiServiceEndpointsUserGetEndpointApiResponse<TStatus extends SnackDeptApiServiceEndpointsUserGetEndpointStatusCodes = SnackDeptApiServiceEndpointsUserGetEndpointStatusCodes> = (
    | ((HttpResponse<(UserDto)[]>) & ({
          status: 200;
          ok: true;
        }))
    | ((Omit<HttpErrorResponse, 'error'>) & ({
          error: (unknown) | (null);
          status: 401;
          ok: false;
        }))
    | ((Omit<HttpErrorResponse, 'error'>) & ({
          error: (unknown) | (null);
          status: 403;
          ok: false;
        }))
    | ((Omit<HttpErrorResponse, 'error'>) & ({
          error: (unknown) | (null);
          status: 500;
          ok: false;
        }))) & ({
      status: TStatus;
    });

type SnackDeptApiServiceEndpointsUserCreateEndpointStatusCodes =
  | (201)
  | (401)
  | (403)
  | (500);
/**
 * Response model for operation snackDeptApiServiceEndpointsUserCreateEndpoint
 */
export type SnackDeptApiServiceEndpointsUserCreateEndpointApiResponse<TStatus extends SnackDeptApiServiceEndpointsUserCreateEndpointStatusCodes = SnackDeptApiServiceEndpointsUserCreateEndpointStatusCodes> = (
    | ((HttpResponse<unknown>) & ({
          status: 201;
          ok: true;
        }))
    | ((Omit<HttpErrorResponse, 'error'>) & ({
          error: (unknown) | (null);
          status: 401;
          ok: false;
        }))
    | ((Omit<HttpErrorResponse, 'error'>) & ({
          error: (unknown) | (null);
          status: 403;
          ok: false;
        }))
    | ((Omit<HttpErrorResponse, 'error'>) & ({
          error: (unknown) | (null);
          status: 500;
          ok: false;
        }))) & ({
      status: TStatus;
    });

type SnackDeptApiServiceEndpointsUserDeleteEndpointStatusCodes =
  | (204)
  | (401)
  | (403)
  | (500);
/**
 * Response model for operation snackDeptApiServiceEndpointsUserDeleteEndpoint
 */
export type SnackDeptApiServiceEndpointsUserDeleteEndpointApiResponse<TStatus extends SnackDeptApiServiceEndpointsUserDeleteEndpointStatusCodes = SnackDeptApiServiceEndpointsUserDeleteEndpointStatusCodes> = (
    | ((HttpResponse<unknown>) & ({
          status: 204;
          ok: true;
        }))
    | ((Omit<HttpErrorResponse, 'error'>) & ({
          error: (unknown) | (null);
          status: 401;
          ok: false;
        }))
    | ((Omit<HttpErrorResponse, 'error'>) & ({
          error: (unknown) | (null);
          status: 403;
          ok: false;
        }))
    | ((Omit<HttpErrorResponse, 'error'>) & ({
          error: (unknown) | (null);
          status: 500;
          ok: false;
        }))) & ({
      status: TStatus;
    });

type SnackDeptApiServiceEndpointsUserUpdateEndpointStatusCodes =
  | (204)
  | (401)
  | (403)
  | (500);
/**
 * Response model for operation snackDeptApiServiceEndpointsUserUpdateEndpoint
 */
export type SnackDeptApiServiceEndpointsUserUpdateEndpointApiResponse<TStatus extends SnackDeptApiServiceEndpointsUserUpdateEndpointStatusCodes = SnackDeptApiServiceEndpointsUserUpdateEndpointStatusCodes> = (
    | ((HttpResponse<unknown>) & ({
          status: 204;
          ok: true;
        }))
    | ((Omit<HttpErrorResponse, 'error'>) & ({
          error: (unknown) | (null);
          status: 401;
          ok: false;
        }))
    | ((Omit<HttpErrorResponse, 'error'>) & ({
          error: (unknown) | (null);
          status: 403;
          ok: false;
        }))
    | ((Omit<HttpErrorResponse, 'error'>) & ({
          error: (unknown) | (null);
          status: 500;
          ok: false;
        }))) & ({
      status: TStatus;
    });

type SnackDeptApiServiceEndpointsUserGetFullEndpointStatusCodes =
  | (200)
  | (401)
  | (403)
  | (500);
/**
 * Response model for operation snackDeptApiServiceEndpointsUserGetFullEndpoint
 */
export type SnackDeptApiServiceEndpointsUserGetFullEndpointApiResponse<TStatus extends SnackDeptApiServiceEndpointsUserGetFullEndpointStatusCodes = SnackDeptApiServiceEndpointsUserGetFullEndpointStatusCodes> = (
    | ((HttpResponse<(UserDto)[]>) & ({
          status: 200;
          ok: true;
        }))
    | ((Omit<HttpErrorResponse, 'error'>) & ({
          error: (unknown) | (null);
          status: 401;
          ok: false;
        }))
    | ((Omit<HttpErrorResponse, 'error'>) & ({
          error: (unknown) | (null);
          status: 403;
          ok: false;
        }))
    | ((Omit<HttpErrorResponse, 'error'>) & ({
          error: (unknown) | (null);
          status: 500;
          ok: false;
        }))) & ({
      status: TStatus;
    });

type SnackDeptApiServiceEndpointsDeptCreateEndpointStatusCodes =
  | (201)
  | (401)
  | (403)
  | (500);
/**
 * Response model for operation snackDeptApiServiceEndpointsDeptCreateEndpoint
 */
export type SnackDeptApiServiceEndpointsDeptCreateEndpointApiResponse<TStatus extends SnackDeptApiServiceEndpointsDeptCreateEndpointStatusCodes = SnackDeptApiServiceEndpointsDeptCreateEndpointStatusCodes> = (
    | ((HttpResponse<unknown>) & ({
          status: 201;
          ok: true;
        }))
    | ((Omit<HttpErrorResponse, 'error'>) & ({
          error: (unknown) | (null);
          status: 401;
          ok: false;
        }))
    | ((Omit<HttpErrorResponse, 'error'>) & ({
          error: (unknown) | (null);
          status: 403;
          ok: false;
        }))
    | ((Omit<HttpErrorResponse, 'error'>) & ({
          error: (unknown) | (null);
          status: 500;
          ok: false;
        }))) & ({
      status: TStatus;
    });

type SnackDeptApiServiceEndpointsDeptDeleteEndpointStatusCodes =
  | (204)
  | (401)
  | (403)
  | (500);
/**
 * Response model for operation snackDeptApiServiceEndpointsDeptDeleteEndpoint
 */
export type SnackDeptApiServiceEndpointsDeptDeleteEndpointApiResponse<TStatus extends SnackDeptApiServiceEndpointsDeptDeleteEndpointStatusCodes = SnackDeptApiServiceEndpointsDeptDeleteEndpointStatusCodes> = (
    | ((HttpResponse<unknown>) & ({
          status: 204;
          ok: true;
        }))
    | ((Omit<HttpErrorResponse, 'error'>) & ({
          error: (unknown) | (null);
          status: 401;
          ok: false;
        }))
    | ((Omit<HttpErrorResponse, 'error'>) & ({
          error: (unknown) | (null);
          status: 403;
          ok: false;
        }))
    | ((Omit<HttpErrorResponse, 'error'>) & ({
          error: (unknown) | (null);
          status: 500;
          ok: false;
        }))) & ({
      status: TStatus;
    });

type SnackDeptApiServiceEndpointsDeptUpdateEndpointStatusCodes =
  | (204)
  | (401)
  | (403)
  | (500);
/**
 * Response model for operation snackDeptApiServiceEndpointsDeptUpdateEndpoint
 */
export type SnackDeptApiServiceEndpointsDeptUpdateEndpointApiResponse<TStatus extends SnackDeptApiServiceEndpointsDeptUpdateEndpointStatusCodes = SnackDeptApiServiceEndpointsDeptUpdateEndpointStatusCodes> = (
    | ((HttpResponse<unknown>) & ({
          status: 204;
          ok: true;
        }))
    | ((Omit<HttpErrorResponse, 'error'>) & ({
          error: (unknown) | (null);
          status: 401;
          ok: false;
        }))
    | ((Omit<HttpErrorResponse, 'error'>) & ({
          error: (unknown) | (null);
          status: 403;
          ok: false;
        }))
    | ((Omit<HttpErrorResponse, 'error'>) & ({
          error: (unknown) | (null);
          status: 500;
          ok: false;
        }))) & ({
      status: TStatus;
    });

