var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

// Añadimos cors para controlar que servicios se van a poder comunicar con nuestro webAPI

var origenesPermitidos = builder.Configuration.GetValue<string>("OrigenesPermitidos")!.Split(',');
builder.Services.AddCors(opciones =>
{
    opciones.AddDefaultPolicy(politica =>
    {
        politica.WithOrigins(origenesPermitidos).AllowAnyHeader().AllowAnyMethod();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

// Añadimos cors aquí también
app.UseCors();

app.UseAuthorization();

app.MapControllers();

app.Run();
