using api.repository;
using api.Services;
using Microsoft.AspNetCore.Mvc;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddScoped<IStudentRepository, StudentRepository>();
builder.Services.AddScoped<IStudentService, StudentService>();
builder.Services.AddScoped<ISchoolService, SchoolService>();
builder.Services.AddScoped<ISchoolRepository, SchoolRepository>();



builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("CorsPolicy", builder =>
    {
        builder.WithOrigins("http://localhost:4200") // Replace with your client application's origin
             .AllowAnyMethod()
             .AllowAnyHeader();
    });
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors("CorsPolicy");
// app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();


