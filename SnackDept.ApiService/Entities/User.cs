namespace SnackDept.ApiService.Entities;

public class User
{
    public required int Id { get; set; }
    public required string Name { get; set; }
    public IEnumerable<Dept> Depts { get; set; } = [];
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}
