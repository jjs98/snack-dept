﻿using FastEndpoints;
using SnackDept.ApiService.Dtos.Dept;
using SnackDept.ApiService.Services;

namespace SnackDept.ApiService.Endpoints.Dept;

public class UpdateEndpoint(IDeptService deptService) : Endpoint<CreateDeptDto, EmptyResponse>
{
    public override void Configure()
    {
        Patch("api/dept/{Id}");
        AllowAnonymous();
        Tags("Dept");
    }

    public override async Task HandleAsync(CreateDeptDto dto, CancellationToken cancellationToken)
    {
        var deptId = Route<int>("Id");
        await deptService.UpdateDept(new Entities.Dept(new DeptDto(dto)) { Id = deptId });
    }
}
