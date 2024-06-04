using Microsoft.AspNetCore.Mvc;
using Server_v1.ReadObjects;
using Microsoft.Data.Sqlite;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace Server_v1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ObjectPropertyLevelAuthorisationAttackController : ControllerBase
    {
        const string DatabaseConnString = "Data Source=../../database/db_v1.db";

        [HttpGet("Level1")]
        public IEnumerable<Product> Level1()
        {
            Person p1 = new Person(1, "a", "0123");
            Person p2 = new Person(2, "b", "01234");

            Product pr1 = new Product(1, "a", p1);
            Product pr2 = new Product(2, "b", p2);

            List<Product> products = new List<Product> { pr1, pr2 };
            return products;

        }

        [HttpGet("Level2")]
        public IEnumerable<Product> Level2()
        {
            Person p1 = new Person();
            p1.id = 1;
            p1.name= "a";
            Person p2 = new Person();
            p2.id = 2;
            p2.name = "b";

            Product pr1 = new Product(1, "a", p1);
            Product pr2 = new Product(2, "b", p2);

            List<Product> products = new List<Product> { pr1, pr2 };
            return products;
        }
    }
}
