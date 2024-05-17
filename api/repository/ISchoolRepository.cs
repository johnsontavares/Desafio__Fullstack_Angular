using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.dto;

namespace api.repository
{
    public interface ISchoolRepository
    {
        public List<School> GetAllSchools();
        public School AddSchool(School newSchool);

        School DeleteSchool(string iCodEscola);

        School UpdateSchool(string code, School updatedSchool);
    }
}