using Microsoft.AspNetCore.Mvc;
using Server_v1.ReadObjects;
using Microsoft.Data.Sqlite;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace Server_v1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SqlInjectionController : ControllerBase
    {
        const string DatabaseConnString = "Data Source=../../database/db_v1.db";

        [HttpPost("Level1")]
        public IActionResult Level1([FromBody] Account account)
        {
            using (var connection = new SqliteConnection(DatabaseConnString))
            {
                connection.Open();

                var command = connection.CreateCommand();
                command.CommandText = "SELECT Password FROM Accounts where Username = '" + account.username + "' and Password = '" + account.password + "'";

                using (var reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        return Ok(new { value = true });
                    }
                }
            }
            return Ok(new { value = false });
        }

        [HttpPost("Level2")]
        public IActionResult Level2([FromBody] Account account)
        {
            using (var connection = new SqliteConnection(DatabaseConnString))
            {
                connection.Open();

                SqliteCommand cmd = new SqliteCommand("SELECT Password FROM Accounts where Username = '" + account.username + "' and Password = '" + account.password + "'", connection);

                using (var reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        return Ok(new { value=true });
                    }
                }
            }
            return Ok(new { value = false });
        }

        [HttpPost("Level3")]
        public IActionResult Level3([FromBody] Account account)
        {
            using (var connection = new SqliteConnection(DatabaseConnString))
            {
                connection.Open();


                SqliteCommand cmd = new SqliteCommand("SELECT Password FROM Accounts where Username = @username and Password = @password", connection);
                cmd.Parameters.AddWithValue("@username", account.username);
                cmd.Parameters.AddWithValue("@password", account.password);

                using (var reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        return Ok(new { value=true });
                    }
                }
            }

            return Ok(new { value = false });
        }
    }
}
