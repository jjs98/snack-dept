import { HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { waitForResponse } from '../utils/angular-service.utils';
import { ApiBaseService } from '../utils/api-base-service';
import { RequestBuilder } from '../utils/request-builder';

import type { CreateDeptDto } from '../models/create-dept-dto';
import type { CreateUserDto } from '../models/create-user-dto';
import type { DeleteDeptDto } from '../models/delete-dept-dto';
import type { DeleteUserDto } from '../models/delete-user-dto';
import type { SnackDeptApiServiceEndpointsDeptCreateEndpointApiResponse, SnackDeptApiServiceEndpointsDeptDeleteEndpointApiResponse, SnackDeptApiServiceEndpointsDeptUpdateEndpointApiResponse, SnackDeptApiServiceEndpointsUserCreateEndpointApiResponse, SnackDeptApiServiceEndpointsUserDeleteEndpointApiResponse, SnackDeptApiServiceEndpointsUserGetEndpointApiResponse, SnackDeptApiServiceEndpointsUserGetFullEndpointApiResponse, SnackDeptApiServiceEndpointsUserUpdateEndpointApiResponse } from '../models/responses/snack-dept-api-service-responses.model';
import type { UpdateDeptDto } from '../models/update-dept-dto';
import type { UpdateUserDto } from '../models/update-user-dto';
import type { AbortablePromise } from '../utils/angular-service.utils';

/**
 * Parameters for operation snackDeptApiServiceEndpointsUserCreateEndpoint
 */
type SnackDeptApiServiceEndpointsUserCreateEndpointParams = {
    body: CreateUserDto;
  };

/**
 * Parameters for operation snackDeptApiServiceEndpointsUserDeleteEndpoint
 */
type SnackDeptApiServiceEndpointsUserDeleteEndpointParams = {
    body: DeleteUserDto;
  };

/**
 * Parameters for operation snackDeptApiServiceEndpointsUserUpdateEndpoint
 */
type SnackDeptApiServiceEndpointsUserUpdateEndpointParams = {
    body: UpdateUserDto;
  };

/**
 * Parameters for operation snackDeptApiServiceEndpointsDeptCreateEndpoint
 */
type SnackDeptApiServiceEndpointsDeptCreateEndpointParams = {
    body: CreateDeptDto;
  };

/**
 * Parameters for operation snackDeptApiServiceEndpointsDeptDeleteEndpoint
 */
type SnackDeptApiServiceEndpointsDeptDeleteEndpointParams = {
    body: DeleteDeptDto;
  };

/**
 * Parameters for operation snackDeptApiServiceEndpointsDeptUpdateEndpoint
 */
type SnackDeptApiServiceEndpointsDeptUpdateEndpointParams = {
    body: UpdateDeptDto;
  };

@Injectable()
export class SnackDeptApiServiceService extends ApiBaseService {
  private static readonly SNACK_DEPT_API_SERVICE_ENDPOINTS_USER_GET_ENDPOINT_PATH = '/api/user';
  private static readonly SNACK_DEPT_API_SERVICE_ENDPOINTS_USER_CREATE_ENDPOINT_PATH = '/api/user';
  private static readonly SNACK_DEPT_API_SERVICE_ENDPOINTS_USER_DELETE_ENDPOINT_PATH = '/api/user';
  private static readonly SNACK_DEPT_API_SERVICE_ENDPOINTS_USER_UPDATE_ENDPOINT_PATH = '/api/user';
  private static readonly SNACK_DEPT_API_SERVICE_ENDPOINTS_USER_GET_FULL_ENDPOINT_PATH = '/api/user/full';
  private static readonly SNACK_DEPT_API_SERVICE_ENDPOINTS_DEPT_CREATE_ENDPOINT_PATH = '/api/dept';
  private static readonly SNACK_DEPT_API_SERVICE_ENDPOINTS_DEPT_DELETE_ENDPOINT_PATH = '/api/dept';
  private static readonly SNACK_DEPT_API_SERVICE_ENDPOINTS_DEPT_UPDATE_ENDPOINT_PATH = '/api/dept';

  public snackDeptApiServiceEndpointsUserGetEndpoint(context?: HttpContext): AbortablePromise<SnackDeptApiServiceEndpointsUserGetEndpointApiResponse> {
    const rb = new RequestBuilder(this.rootUrl, SnackDeptApiServiceService.SNACK_DEPT_API_SERVICE_ENDPOINTS_USER_GET_ENDPOINT_PATH, 'get');

    return waitForResponse<SnackDeptApiServiceEndpointsUserGetEndpointApiResponse>(
      this.http.request(rb.build({
        responseType: 'json',
        accept: 'application/json',
        context,
      })),
      {
        errorResponseTypes: {
          401: 'text',
          403: 'text',
          500: 'text',
        }
      }
    )
  }

  public snackDeptApiServiceEndpointsUserCreateEndpoint(params: SnackDeptApiServiceEndpointsUserCreateEndpointParams, context?: HttpContext): AbortablePromise<SnackDeptApiServiceEndpointsUserCreateEndpointApiResponse> {
    const rb = new RequestBuilder(this.rootUrl, SnackDeptApiServiceService.SNACK_DEPT_API_SERVICE_ENDPOINTS_USER_CREATE_ENDPOINT_PATH, 'post');
    rb.body(params.body, 'application/json');

    return waitForResponse<SnackDeptApiServiceEndpointsUserCreateEndpointApiResponse>(
      this.http.request(rb.build({
        responseType: 'text',
        accept: '*/*',
        context,
      })),
      {
        errorResponseTypes: {
          401: 'text',
          403: 'text',
          500: 'text',
        }
      }
    )
  }

  public snackDeptApiServiceEndpointsUserDeleteEndpoint(params: SnackDeptApiServiceEndpointsUserDeleteEndpointParams, context?: HttpContext): AbortablePromise<SnackDeptApiServiceEndpointsUserDeleteEndpointApiResponse> {
    const rb = new RequestBuilder(this.rootUrl, SnackDeptApiServiceService.SNACK_DEPT_API_SERVICE_ENDPOINTS_USER_DELETE_ENDPOINT_PATH, 'delete');
    rb.body(params.body, 'application/json');

    return waitForResponse<SnackDeptApiServiceEndpointsUserDeleteEndpointApiResponse>(
      this.http.request(rb.build({
        responseType: 'text',
        accept: '*/*',
        context,
      })),
      {
        errorResponseTypes: {
          401: 'text',
          403: 'text',
          500: 'text',
        }
      }
    )
  }

  public snackDeptApiServiceEndpointsUserUpdateEndpoint(params: SnackDeptApiServiceEndpointsUserUpdateEndpointParams, context?: HttpContext): AbortablePromise<SnackDeptApiServiceEndpointsUserUpdateEndpointApiResponse> {
    const rb = new RequestBuilder(this.rootUrl, SnackDeptApiServiceService.SNACK_DEPT_API_SERVICE_ENDPOINTS_USER_UPDATE_ENDPOINT_PATH, 'patch');
    rb.body(params.body, 'application/json');

    return waitForResponse<SnackDeptApiServiceEndpointsUserUpdateEndpointApiResponse>(
      this.http.request(rb.build({
        responseType: 'text',
        accept: '*/*',
        context,
      })),
      {
        errorResponseTypes: {
          401: 'text',
          403: 'text',
          500: 'text',
        }
      }
    )
  }

  public snackDeptApiServiceEndpointsUserGetFullEndpoint(context?: HttpContext): AbortablePromise<SnackDeptApiServiceEndpointsUserGetFullEndpointApiResponse> {
    const rb = new RequestBuilder(this.rootUrl, SnackDeptApiServiceService.SNACK_DEPT_API_SERVICE_ENDPOINTS_USER_GET_FULL_ENDPOINT_PATH, 'get');

    return waitForResponse<SnackDeptApiServiceEndpointsUserGetFullEndpointApiResponse>(
      this.http.request(rb.build({
        responseType: 'json',
        accept: 'application/json',
        context,
      })),
      {
        errorResponseTypes: {
          401: 'text',
          403: 'text',
          500: 'text',
        }
      }
    )
  }

  public snackDeptApiServiceEndpointsDeptCreateEndpoint(params: SnackDeptApiServiceEndpointsDeptCreateEndpointParams, context?: HttpContext): AbortablePromise<SnackDeptApiServiceEndpointsDeptCreateEndpointApiResponse> {
    const rb = new RequestBuilder(this.rootUrl, SnackDeptApiServiceService.SNACK_DEPT_API_SERVICE_ENDPOINTS_DEPT_CREATE_ENDPOINT_PATH, 'post');
    rb.body(params.body, 'application/json');

    return waitForResponse<SnackDeptApiServiceEndpointsDeptCreateEndpointApiResponse>(
      this.http.request(rb.build({
        responseType: 'text',
        accept: '*/*',
        context,
      })),
      {
        errorResponseTypes: {
          401: 'text',
          403: 'text',
          500: 'text',
        }
      }
    )
  }

  public snackDeptApiServiceEndpointsDeptDeleteEndpoint(params: SnackDeptApiServiceEndpointsDeptDeleteEndpointParams, context?: HttpContext): AbortablePromise<SnackDeptApiServiceEndpointsDeptDeleteEndpointApiResponse> {
    const rb = new RequestBuilder(this.rootUrl, SnackDeptApiServiceService.SNACK_DEPT_API_SERVICE_ENDPOINTS_DEPT_DELETE_ENDPOINT_PATH, 'delete');
    rb.body(params.body, 'application/json');

    return waitForResponse<SnackDeptApiServiceEndpointsDeptDeleteEndpointApiResponse>(
      this.http.request(rb.build({
        responseType: 'text',
        accept: '*/*',
        context,
      })),
      {
        errorResponseTypes: {
          401: 'text',
          403: 'text',
          500: 'text',
        }
      }
    )
  }

  public snackDeptApiServiceEndpointsDeptUpdateEndpoint(params: SnackDeptApiServiceEndpointsDeptUpdateEndpointParams, context?: HttpContext): AbortablePromise<SnackDeptApiServiceEndpointsDeptUpdateEndpointApiResponse> {
    const rb = new RequestBuilder(this.rootUrl, SnackDeptApiServiceService.SNACK_DEPT_API_SERVICE_ENDPOINTS_DEPT_UPDATE_ENDPOINT_PATH, 'patch');
    rb.body(params.body, 'application/json');

    return waitForResponse<SnackDeptApiServiceEndpointsDeptUpdateEndpointApiResponse>(
      this.http.request(rb.build({
        responseType: 'text',
        accept: '*/*',
        context,
      })),
      {
        errorResponseTypes: {
          401: 'text',
          403: 'text',
          500: 'text',
        }
      }
    )
  }
}
