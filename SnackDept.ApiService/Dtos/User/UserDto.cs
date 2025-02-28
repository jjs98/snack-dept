using SnackDept.ApiService.Dtos.Dept;

namespace SnackDept.ApiService.Dtos.User;

public class UserDto
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public IEnumerable<DeptDto> Depts { get; set; } = [];
}
