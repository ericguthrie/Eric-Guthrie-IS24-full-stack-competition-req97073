using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.ComponentModel.DataAnnotations;

namespace Code_Challenge.Models
{
    public class ProductResponse
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string ProductOwnerName { get; set; }
        public string ScrumMasterName { get; set; }

        [MaxLength(5)]
        public List<string> Developers { get; set; }

        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:yyyy-MM-dd}")]
        public DateTime StartDate { get; set; }

        public string Methodology { get; set; } 
    }

}
