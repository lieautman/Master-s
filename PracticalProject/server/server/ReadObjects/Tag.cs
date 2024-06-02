namespace Server_v1.ReadObjects
{
    public class Tag
    {
        public int id { get; set; }
        public string name { get; set; }

        public Tag()
        {
            this.id = 0;
            this.name = "";
        }

        public Tag(int id, string name)
        {
            this.id = id;
            this.name = name;
        }
    }
}
