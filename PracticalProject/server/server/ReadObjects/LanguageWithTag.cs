namespace Server_v1.ReadObjects
{
    public class LanguageWithTag
    {
        public int id { get; set; }
        public string name { get; set; }
        public List<Tag> tags { get; set; }

        public LanguageWithTag()
        {
            this.id = 0;
            this.name = "";
            this.tags = new List<Tag>();


        }
        public LanguageWithTag(int id, string name)
        {
            this.id = id;
            this.name = name;
            this.tags = new List<Tag>();
        }

        public LanguageWithTag(int id, string name, List<Tag> tags)
        {
            this.id = id;
            this.name = name;
            this.tags = tags;
        }
    }
}
