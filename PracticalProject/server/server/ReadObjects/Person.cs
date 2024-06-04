namespace Server_v1.ReadObjects
{
    public class Person
    {
        public int id { get; set; }
        public string name { get; set; }
        public string phone { get; set; }

        public Person()
        {
            this.id = 0;
            this.name = "";
            this.phone = "";
        }

        public Person(int id, string name, string phone)
        {
            this.id = id;
            this.name = name;
            this.phone = phone;
        }
    }
}
