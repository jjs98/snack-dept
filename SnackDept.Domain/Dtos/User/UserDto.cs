using SnackDept.Domain.Dtos.Dept;

namespace SnackDept.Domain.Dtos.User;

public class UserDto
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public IEnumerable<DeptDto> Depts { get; set; } = [];
}
