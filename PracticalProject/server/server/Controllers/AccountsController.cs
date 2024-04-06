using Microsoft.AspNetCore.Mvc;
using Server_v1.ReadObjects;
using Microsoft.Data.Sqlite;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace Server_v1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AccountsController : ControllerBase
    {
        const string DatabaseConnString = "Data Source=../../database/db_v1.db";

        [HttpGet(Name = "GetAccounts")]
        public IEnumerable<Account> Get()
        {
            using (var connection = new SqliteConnection(DatabaseConnString))
            {
                connection.Open();

                var command = connection.CreateCommand();
                command.CommandText = "SELECT * FROM Accounts";

                List<Account> list = new List<Account>();

                using (var reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        var id = Int32.Parse(reader.GetString(0));
                        var username = reader.GetString(1);
                        var password = reader.GetString(2);

                        Account a = new Account(id, username, password);
                        list.Add(a);
                    }
                }
                return list;
            }
        }

        [HttpPost("SignInLv1")]
        public IActionResult SignInLv1([FromBody] Account account)
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

        [HttpPost("SignInLv2")]
        public IActionResult SignInLv2([FromBody] Account account)
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

        [HttpPost("SignInLv3")]
        public IActionResult SignInLv3([FromBody] Account account)
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
