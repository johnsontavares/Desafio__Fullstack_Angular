using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.dto;

namespace api.Services
{
    public interface ISchoolService
    {
        List<School> GetAllSchools();
        School AddSchools(School newSchool);

        School DeleteSchool(string iCodEscola);

        School UpdateSchool(string code, School Updateschool);

        
    }
}