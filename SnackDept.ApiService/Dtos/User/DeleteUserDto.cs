﻿using Microsoft.AspNetCore.Mvc;

namespace SnackDept.ApiService.Dtos.User;

public class DeleteUserDto
{
    [FromRoute]
    public required int Id { get; set; }
}
