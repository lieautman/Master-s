namespace Server_v1.ReadObjects
{
    public class Topic
    {
        public int id { get; set; }
        public string name { get; set; }

        public Topic()
        {
            this.id = 0;
            this.name = "";
        }

        public Topic(int id, string name)
        {
            this.id = id;
            this.name = name;
        }
    }
}
