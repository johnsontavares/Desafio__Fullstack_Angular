using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.dto
{
    public class School
    {
        
    [Required(AllowEmptyStrings = false)]
    public string codEscola { get; set; }

    [Required(AllowEmptyStrings = false)]
    public string descricao { get; set; }
    }
}