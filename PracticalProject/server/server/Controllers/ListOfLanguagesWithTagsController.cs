using Microsoft.AspNetCore.Mvc;
using Server_v1.ReadObjects;
using Microsoft.Data.Sqlite;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using System.Reflection.PortableExecutable;

namespace Server_v1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ListOfLanguagesWithTagsController : ControllerBase
    {
        const string DatabaseConnString = "Data Source=../../database/db_v1.db";

        [HttpGet(Name = "GetListOfLanguagesWithTags")]
        public IEnumerable<LanguageWithTag> Get()
        {
            using (var connection = new SqliteConnection(DatabaseConnString))
            {
                connection.Open();

                var command = connection.CreateCommand();
                command.CommandText = "SELECT * FROM Language";

                List<LanguageWithTag> list = new List<LanguageWithTag>();

                using (var reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        var id = Int32.Parse(reader.GetString(0));
                        var name = reader.GetString(1);

                        LanguageWithTag a = new LanguageWithTag(id, name);
                        list.Add(a);
                    }
                }


                foreach (var item in list)
                {
                    var command2 = connection.CreateCommand();
                    command2.CommandText = "SELECT * FROM LanguageToTag where LanguageId=" + item.id.ToString();

                    List<int> listOfTagId = new List<int>();

                    using (var reader2 = command2.ExecuteReader())
                    {
                        while (reader2.Read())
                        {
                            var tagId = Int32.Parse(reader2.GetString(0));

                            listOfTagId.Add(tagId);
                        }
                    }

                    List<Tag> listOfTag = new List<Tag>();

                    foreach (var tagId in listOfTagId)
                    {
                        var command3 = connection.CreateCommand();
                        command3.CommandText = "SELECT * FROM Tag where Id=" + tagId;


                        using (var reader3 = command3.ExecuteReader())
                        {
                            while (reader3.Read())
                            {
                                var id = Int32.Parse(reader3.GetString(0));
                                var name = reader3.GetString(1);

                                Tag a = new Tag(id, name);
                                listOfTag.Add(a);
                            }
                        }
                    }
                    item.tags = listOfTag;


                }




                return list;
            }
        }
    }
}
