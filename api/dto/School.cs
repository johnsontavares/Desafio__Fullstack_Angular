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
    public string iCodEscola { get; set; }

    [Required(AllowEmptyStrings = false)]
    public string Descricao { get; set; }
    }
}