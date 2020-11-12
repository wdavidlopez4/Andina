using Andina.Domain.Models.Interfaces;
using Andina.Infrastructure.InfrastructureMongo;
using Andina.Infrastructure.InfrastructureMongo.Interfaces;
using Andina.Infrastructure.InfrastructureRepository;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Text;
using Andina.Application.UsuarioServices.Interfaces;
using Andina.Application.UsuarioServices.Implementation;
using Andina.Application.VehiculoServices.Interfaces;
using Andina.Application.VehiculoServices.Implementation;
using Andina.Application.TipoVehiculoServices.Interfaces;
using Andina.Application.TipoVehiculoServices.Implementation;
using Andina.Application.MarcaVehiculoServices.Implementation;
using Andina.Application.MarcaVehiculoServices.Interfaces;

namespace Andina.Infrastructure.InfrastructureIOC
{
    public class InjectionContainer 
    {
        public static void InyectarDbContext(IServiceCollection services)
        {
            services.AddSingleton<IContextDb, ContextDb>();
        }

        public static void InyectarRepositorio(IServiceCollection services)
        {
            services.AddScoped<IRepository, Repository>();
        }

        public static void InyectarServicios(IServiceCollection services)
        {
            services.AddScoped<IUsuarioService, UsuarioService>();
            services.AddScoped<IVehiculoService, VehiculoService>();
            services.AddScoped<ITipoVehiculoService, TipoVehiculoService>();
            services.AddScoped<IMarcaVehiculoService, MarcaVehiculoService>();
        }

        //inyecta la configuracion de la db 
        public static void InyectarDbSettings(IServiceCollection services, IConfiguration Configuration)
        {
            //configura y selecciona el fragmento del json
            services.Configure<DbSettings>(
                Configuration.GetSection(nameof(DbSettings)));

            //inyecta la los datos a la clase dbsettings
            services.AddSingleton<ISettingsDb>(sp =>
                sp.GetRequiredService<IOptions<DbSettings>>().Value);
        }
    }
}
