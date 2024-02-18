namespace Server_v1.ReadObjects
{
    public class Account
    {
        public int id { get; set; }

        public string username { get; set; }

        public string password { get; set; }

        public Account(int id, string username, string password)
        {
            this.id = id;
            this.username = username;
            this.password = password;
        }
    }
}
