using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Linq;

namespace Code_Challenge.Models
{
    public class ProductRequest
    {
        public string ProductName { get; set; }
        public string ProductOwnerName { get; set; }
        public string ScrumMasterName { get; set; }

        [MaxLength(5)]
        public List<string> Developers { get; set; }

        [DataType(DataType.Date)]

        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:yyyy-MM-dd}")]
        public DateTime StartDate { get; set; }

        public string  Methodology{ get; set; }
    }




}
