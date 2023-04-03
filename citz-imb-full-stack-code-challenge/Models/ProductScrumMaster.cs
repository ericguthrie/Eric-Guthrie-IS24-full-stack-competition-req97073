using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Code_Challenge.Models
{
    public class ProductScrumMaster
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ProductScrumMasterId { get; set; }
        public ScrumMaster ScrumMaster { get; set; }
        public int ProductId { get; set; }
        public Product Product { get; set; }
    }
}
