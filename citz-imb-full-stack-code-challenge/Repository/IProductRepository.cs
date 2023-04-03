using Code_Challenge.Models;

namespace citz_imb_full_stack_code_challenge.Repository
{
    public interface IProductRepository
    {
        List<Product> GetAllProducts();

        ProductResponse GetProductById(int productId);

        ProductResponse CreateProduct(ProductRequest product);

        ProductResponse UpdateProduct(ProductRequest product, int productId);

        ProductResponse DeleteProductById(int productId);
    }
}
