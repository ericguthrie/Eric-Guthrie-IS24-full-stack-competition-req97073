using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Code_Challenge.Models
{
    public class ScrumMaster
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ScrumMasterId { get; set; }
        public string Name { get; set; }
        //public ICollection<Product> Products { get; set; }
    }

}
