namespace Server_v1.ReadObjects
{
    public class Language
    {
        public int id { get; set; }
        public string name { get; set; }

        public Language()
        {
            this.id = 0;
            this.name = "";
        }

        public Language(int id, string name)
        {
            this.id = id;
            this.name = name;
        }
    }
}
