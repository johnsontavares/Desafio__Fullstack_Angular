using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.dto;
using api.repository;

namespace api.Services
{
    public class SchoolService : ISchoolService
    {
        private readonly ISchoolRepository _schoolRepository; // Interface for student data access

        public SchoolService(ISchoolRepository schoolRepository)
        {
            _schoolRepository = schoolRepository;
        }

        public School DeleteSchool(string CodEscola)
        {
            return (_schoolRepository.DeleteSchool(CodEscola));
        }

        public School UpdateSchool(string code ,School UpdateSchool)
        {
            return _schoolRepository.UpdateSchool(code, UpdateSchool);
        }

        School ISchoolService.AddSchools(School newSchool)
        {
            return _schoolRepository.AddSchool(newSchool);
        }

        List<School> ISchoolService.GetAllSchools()
        {
            return _schoolRepository.GetAllSchools();
        }
    }
}