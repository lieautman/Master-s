namespace Server_v1.ReadObjects
{
    public class Product
    {
        public int id { get; set; }
        public string productName { get; set; }
        public Person person { get; set; }

        public Product()
        {
            this.id = 0;
            this.productName = "";
            this.person = new Person();
        }

        public Product(int id, string productName, Person person)
        {
            this.id = id;
            this.productName = productName;
            this.person = person;
        }
    }
}
