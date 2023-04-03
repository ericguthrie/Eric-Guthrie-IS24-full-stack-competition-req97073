using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Code_Challenge.Models
{
    public class ProductDeveloper
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ProductDeveloperId { get; set; }
        public int DeveloperId { get; set; }
        [ForeignKey("DeveloperId")]
        public Developer Developer { get; set; }
        public int ProductId { get; set; }
        //[ForeignKey("ProductId")]
        //public Product Product { get; set; }
    }
}
