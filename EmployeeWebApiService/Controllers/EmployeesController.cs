using EmployeeWebApiService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EmployeeWebApiService.Controllers
{
    public class EmployeesController : ApiController
    {
        EmployeeDBEntities entities = new EmployeeDBEntities();

        public IEnumerable<Employee> Get()
        {
            return entities.Employees.ToList();
        }

        public Employee Get(string code)
        {
            return entities.Employees.FirstOrDefault(x => x.code == code);
        }
    }
}
