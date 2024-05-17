using System.ComponentModel.DataAnnotations;

namespace api;

public class UpdateStudent
{
    [Required(AllowEmptyStrings = false)]
    public string codAluno { get; set; }

    [Required(AllowEmptyStrings = false)]
    public string nome { get; set; }

    [Required(AllowEmptyStrings = false)]
    public string dNascimento { get; set; }

    [Required(AllowEmptyStrings = false)]
    public string cpf { get; set; }

    [Required(AllowEmptyStrings = false)]
    public string  endereco { get; set; }

    [Required(AllowEmptyStrings = false)]
    public string celular {get; set;}

    [Required(AllowEmptyStrings = false)]
    public string iCodeEscola {get; set;}
}
