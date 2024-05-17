using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.dto;

namespace api.repository
{
    public class SchoolRepository : ISchoolRepository
    {

        private static List<School> _schools = new List<School>{
            new School { iCodEscola = "code01", Descricao = "Escola 001"},
            new School { iCodEscola = "code02", Descricao = "Escola 002"}
        };

    public List<School> GetAllSchools() => _schools;

    public School AddSchool(School newSchool){
        _schools.Add(newSchool);
        return newSchool;
    }

    public School DeleteSchool(string iCodEscola){
        School schoolFinded = (_schools.First(school => school.iCodEscola == iCodEscola));
        _schools.Remove(schoolFinded);

        return schoolFinded;
        }

        public School UpdateSchool(string code,  School updatedSchool)
        {
            int SchoolIndex = _schools.FindIndex(x => x.iCodEscola == code);
            if (SchoolIndex == -1)
            {
                return null;
            }
                _schools[SchoolIndex] = updatedSchool;

                return updatedSchool;
        }
    }
}