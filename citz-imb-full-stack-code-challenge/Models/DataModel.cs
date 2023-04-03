namespace Code_Challenge.Models
{
    public class DataModel
    {
        public List<ProductSummaryDataModel> Products { get; set; }

    }
    public class ProductSummaryDataModel
    {
        public List<ProductDataModel> Products { get; set; }
        public List<DeveloperDataModel> Developers { get; set; }
        public List<ScrumMasterDataModel> ScrumMasters { get; set; }
        public List<ProductDeveloper> ProductDevelopers { get; set; }

    }

    public class DeveloperDataModel
    {
        public int developerId { get; set; }

        public string developerName { get; set; }
    }

    public class ScrumMasterDataModel
    {
        public int ScrumMasterId { get; set; }

        public string ScrumMasterName { get; set; }
    }

    public class ProductDataModel
    {
        public int ProductId { get; set; }

        public int ScrumMasterId { get; set; }

        public string ProductName { get; set; }

        public string ProductOwnerName { get; set;}

        public DateTime StartDate { get; set; }

        public string methodology { get; set; }
    }

    public class ProductDevelopers
    {
        public int DeveloperId { get; set; }

        public int ProductId { get; set; }

    }
}
