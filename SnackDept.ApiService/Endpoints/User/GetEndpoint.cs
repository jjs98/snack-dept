﻿using FastEndpoints;
using SnackDept.ApiService.Dtos.User;
using SnackDept.ApiService.Services;

namespace SnackDept.ApiService.Endpoints.User;

public class GetEndpoint(IUserService userService) : EndpointWithoutRequest<IEnumerable<UserDto>>
{
    public override void Configure()
    {
        Get("api/user");
        AllowAnonymous();
        Tags("User");
    }

    public override async Task HandleAsync(CancellationToken cancellationToken)
    {
        var users = await userService.GetUsers();
        Response = users.Select(x => x.ToDto());
    }
}
