﻿using FastEndpoints;
using SnackDept.ApiService.Dtos.Dept;
using SnackDept.ApiService.Services;

namespace SnackDept.ApiService.Endpoints.Dept;

public class UpdateEndpoint(IDeptService deptService) : Endpoint<UpdateDeptDto>
{
    public override void Configure()
    {
        Patch("api/dept");
        AllowAnonymous();
        Tags("Dept");
    }

    public override async Task HandleAsync(UpdateDeptDto dto, CancellationToken cancellationToken)
    {
        await deptService.UpdateDept(new Entities.Dept(new DeptDto(dto)) { Id = dto.Id });
    }
}
