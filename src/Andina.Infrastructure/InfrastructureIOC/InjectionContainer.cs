using Andina.Application.VeiculoServices.Interfaces;
using Andina.Application.VeiculoServices;
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
            services.AddScoped<IVeiculoService, VeiculoService>();
        }

        //inyecta la configuracion de la db 
        public static void InyectarDbSettings(IServiceCollection services, IConfiguration Configuration)
        {
            //configura y selecciona el fracmento del json
            services.Configure<SettingsDb>(
                Configuration.GetSection(nameof(SettingsDb)));

            //inyecta la los datos a la clase dbsettings
            services.AddSingleton<ISettingsDb>(sp =>
                sp.GetRequiredService<IOptions<SettingsDb>>().Value);
        }
    }
}
