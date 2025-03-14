﻿using FastEndpoints;
using SnackDept.ApiService.Dtos.User;
using SnackDept.ApiService.Services;

namespace SnackDept.ApiService.Endpoints.User;

public class GetFullEndpoint(IUserService userService)
    : EndpointWithoutRequest<IEnumerable<UserDto>>
{
    public override void Configure()
    {
        Get("api/user/full");
        AllowAnonymous();
        Tags("User", "Dept");
    }

    public override async Task HandleAsync(CancellationToken cancellationToken)
    {
        var users = await userService.GetUsersWithDepts();
        Response = users.Select(x => x.ToDto());
    }
}
