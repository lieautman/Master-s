using Microsoft.AspNetCore.Mvc;
using Server_v1.ReadObjects;
using Microsoft.Data.Sqlite;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace Server_v1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ListOfTopicsController : ControllerBase
    {
        const string DatabaseConnString = "Data Source=../../database/db_v1.db";

        [HttpGet("{value}")]
        public IEnumerable<Topic> Get(string value)
        {
            List<Tag>? tags = JsonConvert.DeserializeObject<List<Tag>>(value);
            if(tags==null)
                return new List<Topic>();


            HashSet<int> topicIdSet = new HashSet<int>();
            foreach (var tag in tags)
            {
                using (var connection = new SqliteConnection(DatabaseConnString))
                {
                    connection.Open();

                    var command = connection.CreateCommand();
                    command.CommandText = "SELECT * FROM TopicToTag where TagId=" + tag.id;


                    using (var reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            var id = Int32.Parse(reader.GetString(1));

                            topicIdSet.Add(id);
                        }
                    }
                }
            }

            List<Topic> topicList = new List<Topic>();
            foreach (var topicId in topicIdSet)
            {
                using (var connection = new SqliteConnection(DatabaseConnString))
                {
                    connection.Open();

                    var command = connection.CreateCommand();
                    command.CommandText = "SELECT * FROM Topic where id=" + topicId;


                    using (var reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            var id = Int32.Parse(reader.GetString(0));
                            var name = reader.GetString(1);

                            Topic a = new Topic(id, name);
                            topicList.Add(a); 
                        }
                    }
                }
            }
            return topicList;
        }
    }
}
