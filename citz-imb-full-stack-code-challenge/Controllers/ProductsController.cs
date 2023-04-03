using citz_imb_full_stack_code_challenge.Context;
using citz_imb_full_stack_code_challenge.Repository;
using Code_Challenge.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Code_Challenge.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly ProductContext _context;
        private readonly IProductRepository _repository ;

        public ProductsController(ProductContext context, IProductRepository repository)
        {
            _context = context;
            _repository = repository;
        }

        // GET: api/Products
        [HttpGet]
        public  ActionResult<IEnumerable<Product>> GetProducts()
        {
            var products =  _repository.GetAllProducts();

            if (products == null || products.Count == 0)
            {
                return NotFound();
            }
            return Ok(products);
        }

        // GET: api/Products/1
        [HttpGet("{id}")]
        public async Task<ActionResult<ProductResponse>> GetProduct(int id)
        {
            var product = _repository.GetProductById(id);

            if (product == null)
            {
                return NotFound();
            }

            return Ok(product);
        }

        // PUT: api/Products/1
        [HttpPut("{id}")]
        public async Task<ActionResult<ProductResponse>> PutProduct(int id, ProductRequest product)
        {

           var updatedProduct = _repository.UpdateProduct(product, id);

            if (updatedProduct == null)
            {
                return NotFound();
            }

            return Ok(updatedProduct);
        }

        // POST: api/Products
        [HttpPost]
        public async Task<ActionResult<ProductResponse>> PostProduct(ProductRequest product)
        {
            var productResponse = _repository.CreateProduct(product);
            return Ok(productResponse);
        }

        // DELETE: api/Products/5
        [HttpDelete("{id}")]
        public ActionResult<ProductResponse> DeleteProduct(int id)
        {
            var response = _repository.DeleteProductById(id);

            if (response == null)
            {
                return NotFound();
            }

            return Ok(response);
        }



        private bool ProductExists(int id)
        {
            return (_context.Products?.Any(e => e.ProductId == id)).GetValueOrDefault();
        }
    }
}
