using Microsoft.Data.Sqlite;


const string DatabaseConnString = "Data Source=../../../../../../Database/db_v1.db";

using (var connection = new SqliteConnection(DatabaseConnString))
{
    Console.WriteLine("The accounts in database are");

    connection.Open();

    var command = connection.CreateCommand();
    command.CommandText =
    @"
        SELECT *
        FROM Accounts
    ";

    using (var reader = command.ExecuteReader())
    {
        while (reader.Read())
        {
            var id = reader.GetString(0);
            var username = reader.GetString(1);
            var password = reader.GetString(2);

            Console.WriteLine($"{id} {username} {password}");
        }
    }
}