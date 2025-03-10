﻿using FastEndpoints;
using SnackDept.ApiService.Dtos.Dept;
using SnackDept.ApiService.Services;

namespace SnackDept.ApiService.Endpoints.Dept;

public class CreateEndpoint(IDeptService deptService) : Endpoint<CreateDeptDto, EmptyResponse>
{
    public override void Configure()
    {
        Post("api/dept");
        AllowAnonymous();
        Tags("Dept");
    }

    public override async Task HandleAsync(CreateDeptDto dto, CancellationToken cancellationToken)
    {
        await deptService.CreateDept(new Entities.Dept(new DeptDto(dto)));
    }
}
