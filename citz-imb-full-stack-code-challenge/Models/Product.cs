using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Code_Challenge.Models
{
    public class Product
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string ProductOwnerName { get; set; }
        public int ScrumMasterId { get; set; }
        [ForeignKey("ScrumMasterId")]
        public ScrumMaster ScrumMaster { get; set; }
        public ICollection<ProductDeveloper> ProductDevelopers { get; set; }

        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:yyyy-MM-dd}")]
        public DateTime StartDate { get; set; }
        public string Methodology { get; set; }
    }

}
