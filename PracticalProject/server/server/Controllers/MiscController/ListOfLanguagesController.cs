using Microsoft.AspNetCore.Mvc;
using Server_v1.ReadObjects;
using Microsoft.Data.Sqlite;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace server.Controllers.MiscController
{
    [ApiController]
    [Route("[controller]")]
    public class ListOfLanguagesController : ControllerBase
    {
        const string DatabaseConnString = "Data Source=../../database/db_v1.db";

        [HttpGet(Name = "GetListOfLanguages")]
        public IEnumerable<Language> Get()
        {
            using (var connection = new SqliteConnection(DatabaseConnString))
            {
                connection.Open();

                var command = connection.CreateCommand();
                command.CommandText = "SELECT * FROM Language";

                List<Language> list = new List<Language>();

                using (var reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        var id = int.Parse(reader.GetString(0));
                        var name = reader.GetString(1);

                        Language a = new Language(id, name);
                        list.Add(a);
                    }
                }
                return list;
            }
        }
    }
}
