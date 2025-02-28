using SnackDept.ApiService.Dtos.User;

namespace SnackDept.ApiService.Entities;

public class User
{
    public int Id { get; set; }
    public required string Name { get; set; }
    public virtual ICollection<Dept> Depts { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }

    public UserDto ToDto()
    {
        return new UserDto()
        {
            Id = Id,
            Name = Name,
            Depts = Depts.Select(dept => dept.ToDto())
        };
    }
}
