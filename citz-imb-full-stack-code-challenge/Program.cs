using citz_imb_full_stack_code_challenge.Context;
using citz_imb_full_stack_code_challenge.Repository;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("V1API", new OpenApiInfo()
    {
        Title = "RESTful API",
        Version = "V1",
        Description = "Restful Api",
        Contact = new OpenApiContact()
        {
            Email = "ericguthrie12@gmail.com",
            Name = "Eric Guthrie",
        },
        License = new OpenApiLicense()
        {
            Name = "MIT Licence",
            Url = new Uri("https://opensource.org/licenses/MIT")
        }
    });
});


builder.Services.AddDbContext<ProductContext>();
builder.Services.AddScoped<IProductRepository, ProductRepository>();

var app = builder.Build();



// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
    app.UseStaticFiles();
}
else
{
    app.UseSwagger();
    app.UseSwaggerUI(options =>
    {
        options.SwaggerEndpoint("/swagger/V1API/swagger.json", "V1 API");
    });
}

app.UseHttpsRedirection();

app.UseRouting();

//using (var context = app.Services.GetService<ProductContext>())
//{

//    context.Database.EnsureCreated();
//    context.initSeedData();
//}



app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
    //endpoints.MapFallbackToFile("index.html");
});


app.Run();
