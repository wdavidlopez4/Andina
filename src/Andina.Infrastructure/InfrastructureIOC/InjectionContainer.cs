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
