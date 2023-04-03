using citz_imb_full_stack_code_challenge.Context;
using Code_Challenge.Models;
using Microsoft.EntityFrameworkCore;

namespace citz_imb_full_stack_code_challenge.Repository
{
    public class ProductRepository : IProductRepository
    {
        private readonly ProductContext _context;
        private Exception notFound;

        public ProductRepository(ProductContext context)
        {
            _context = context;
            if (!_context.Products.Any())
            {
                _context.initSeedData();
            }
        }
        public List<Product> GetAllProducts()

        {
            return _context.Products.Include(p => p.ScrumMaster).Include(p => p.ProductDevelopers).ThenInclude(pd => pd.Developer).ToList();
        }


        public ProductResponse GetProductById(int productId)
        {
            var product = _context.Products.FirstOrDefault(p => p.ProductId == productId);

            if (product == null)
            {
                return null;
            }

            var productDeveloperIds = _context.ProductDevelopers.Where(p => p.ProductId == productId).Select(d => d.DeveloperId).ToList();

            var developerNames = new List<string>();

            foreach (var productDeveloperId in productDeveloperIds)
            {
                var developer = _context.Developers.Where(d => d.DeveloperId == productDeveloperId).FirstOrDefault();

                if (developer != null && developer.Name != null)
                {
                    developerNames.Add(developer.Name);
                }
            }

            var scrumMaster = _context.ScrumMasters.Where(s => s.ScrumMasterId == product.ScrumMasterId).FirstOrDefault();

            return new ProductResponse
            {
                ProductId = productId,
                ScrumMasterName = scrumMaster != null ? scrumMaster.Name : "",
                ProductOwnerName = product.ProductOwnerName,
                StartDate = product.StartDate,
                ProductName = product.ProductName,
                Methodology = product.Methodology,
                Developers = developerNames
            };
        }

        public ProductResponse CreateProduct(ProductRequest product)
        {
            var developerNames = product.Developers;

            var developerList = new List<Developer>();

            foreach (var developer in developerNames)
            {
                var developerEntity = _context.Developers.Where(d => d.Name == developer).FirstOrDefault();

                if (developerEntity == null)
                {
                    var newDeveloper = new Developer
                    {
                        Name = developer
                    };
                    _context.Developers.Add(newDeveloper);
                    _context.SaveChanges();
                    developerList.Add(newDeveloper);
                }
                else
                {
                    developerList.Add(developerEntity);
                }
            }


            var scrumMasterEntity = _context.ScrumMasters.Where(sm => sm.Name == product.ScrumMasterName).FirstOrDefault();

            var scrumMasterId = 0;

            if (scrumMasterEntity == null)
            {
                var newScrumMaster = new ScrumMaster
                {
                    Name = product.ScrumMasterName,
                };
                _context.ScrumMasters.Add(newScrumMaster);
                _context.SaveChanges();
                scrumMasterId = newScrumMaster.ScrumMasterId;
            }
            else
            {
                scrumMasterId = scrumMasterEntity.ScrumMasterId;
            }

            var newProduct = new Product
            {
                ProductName = product.ProductName,
                ProductOwnerName = product.ProductOwnerName,
                ScrumMasterId = scrumMasterId,
                Methodology = product.Methodology.ToString(),
                StartDate = product.StartDate
            };
            _context.Products.Add(newProduct);
            _context.SaveChanges();

            foreach (var developer in developerList)
            {
                var productDeveloper = new ProductDeveloper
                {
                    ProductId = newProduct.ProductId,
                    DeveloperId = developer.DeveloperId
                };
                _context.ProductDevelopers.Add(productDeveloper);
            }
            _context.SaveChanges();

            return new ProductResponse
            {
                ProductId = newProduct.ProductId,
                ProductName = product.ProductName,
                ProductOwnerName = product.ProductOwnerName,
                ScrumMasterName = product.ScrumMasterName,
                Methodology = product.Methodology,
                StartDate = product.StartDate,
                Developers = product.Developers
            };
        }

        public ProductResponse UpdateProduct(ProductRequest product, int productId)
        {
            var oldProductDevelopers = _context.ProductDevelopers.Where(d => d.ProductId == productId);

            _context.ProductDevelopers.RemoveRange(oldProductDevelopers);

            _context.SaveChanges();

            var developerNames = product.Developers;

            var developerList = new List<Developer>();

            foreach (var developer in developerNames)
            {
                var developerEntity = _context.Developers.Where(d => d.Name == developer).FirstOrDefault();

                if (developerEntity == null)
                {
                    var newDeveloper = new Developer
                    {
                        Name = developer
                    };
                    _context.Developers.Add(newDeveloper);
                    _context.SaveChanges();
                    developerList.Add(newDeveloper);
                }
                else
                {
                    developerList.Add(developerEntity);
                }
            }

            var scrumMasterEntity = _context.ScrumMasters.Where(sm => sm.Name == product.ScrumMasterName).FirstOrDefault();

            var scrumMasterId = 0;

            if (scrumMasterEntity == null)
            {
                var newScrumMaster = new ScrumMaster
                {
                    Name = product.ScrumMasterName,
                };
                _context.ScrumMasters.Add(newScrumMaster);
                _context.SaveChanges();
                scrumMasterId = newScrumMaster.ScrumMasterId;
            }
            else
            {
                scrumMasterId = scrumMasterEntity.ScrumMasterId;
            }

            var currentProduct = _context.Products.Where(p => p.ProductId == productId).FirstOrDefault();

            if (currentProduct == null)
            {
                return null;
            }

            currentProduct.ProductOwnerName = product.ProductOwnerName;
            currentProduct.ProductName = product.ProductName;
            currentProduct.ScrumMasterId = scrumMasterId;
            currentProduct.Methodology = product.Methodology.ToString();
            currentProduct.StartDate = DateTime.Now;

            _context.SaveChanges();

            foreach (var developer in developerList)
            {
                var productDeveloper = new ProductDeveloper
                {
                    ProductId = currentProduct.ProductId,
                    DeveloperId = developer.DeveloperId
                };
                _context.ProductDevelopers.Add(productDeveloper);
            }
            _context.SaveChanges();

            return new ProductResponse
            {
                ProductId = currentProduct.ProductId,
                ProductName = product.ProductName,
                ProductOwnerName = product.ProductOwnerName,
                ScrumMasterName = product.ScrumMasterName,
                Methodology = product.Methodology,
                StartDate = product.StartDate,
                Developers = product.Developers
            };
        }



        public ProductResponse DeleteProductById(int productId)
        {
            // Find all ProductDevelopers entities with the corresponding ProductId and remove them
            var productDevelopers = _context.ProductDevelopers.Where(pd => pd.ProductId == productId);
            if (productDevelopers != null)
            {
                _context.ProductDevelopers.RemoveRange(productDevelopers);
            }

            // Find the Product entity and remove it
            var deleteProduct = _context.Products.FirstOrDefault(p => p.ProductId == productId);
            if (deleteProduct != null)
            {
                _context.Products.Remove(deleteProduct);
                _context.SaveChanges();

                // Create and return a ProductResponse object that encapsulates the deleted Product object
                var response = new ProductResponse
                {
                    ProductId = deleteProduct.ProductId,
                };
                return response;
            }

            return null;
        }
    }
}
