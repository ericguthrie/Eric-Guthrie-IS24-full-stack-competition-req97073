using Code_Challenge.Models;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

namespace citz_imb_full_stack_code_challenge.Context
{
    public class ProductContext : DbContext
    {

        public ProductContext(DbContextOptions<ProductContext> options): base(options) 
        {
            
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //optionsBuilder.UseSqlite("DataSource=:memory:");
            optionsBuilder.UseInMemoryDatabase(databaseName: "ProductDb");
            base.OnConfiguring(optionsBuilder);
        }

        public void initSeedData()
        {
            var dataText = System.IO.File.ReadAllText("Data/data.json");

            var data = JsonConvert.DeserializeObject<ProductSummaryDataModel>(dataText);
            foreach (var developer in data.Developers)
            {
                //Products.Add(product);
                var developerEntity = new Developer
                {
                    DeveloperId = developer.developerId,
                    Name= developer.developerName
                };
                Developers.Add(developerEntity);

            }
            SaveChanges();

            foreach (var scrumMaster in data.ScrumMasters)
            {
                //Products.Add(product);
                var scrumMasterEntity = new ScrumMaster
                {
                    ScrumMasterId = scrumMaster.ScrumMasterId,
                    Name = scrumMaster.ScrumMasterName
                };
                ScrumMasters.Add(scrumMasterEntity);

            }
            SaveChanges();

            foreach (var product in data.Products)
            {
                //Products.Add(product);
                var productEntity = new Product
                {
                    ProductId = product.ProductId,
                    ProductName = product.ProductName,
                    StartDate = product.StartDate,
                    ProductOwnerName= product.ProductOwnerName,
                    Methodology = product.methodology,
                    ScrumMasterId = product.ScrumMasterId

                };
                Products.Add(productEntity);

            }

            SaveChanges();

            foreach (var productDeveloper in data.ProductDevelopers)
            {
                //Products.Add(product);
                var productDeveloperEntity = new ProductDeveloper
                {
                    ProductId= productDeveloper.ProductId,
                    DeveloperId = productDeveloper.DeveloperId

                };
                ProductDevelopers.Add(productDeveloperEntity);

            }

            SaveChanges();
        }

        public DbSet<Product> Products { get; set; }

        public DbSet<Developer> Developers { get; set; }

        public DbSet<ProductDeveloper> ProductDevelopers { get; set; }

        public DbSet<ScrumMaster> ScrumMasters { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

        }

    }
}
