using Andina.Application.TipoVehiculoServices.Interfaces;
using Andina.Domain.Dtos;
using Andina.Domain.Models.Interfaces;
using Andina.Domain.Models.Vehiculo;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Andina.Application.TipoVehiculoServices.Implementation
{
    public class TipoVehiculoService : ITipoVehiculoService
    {
        private readonly IRepository repository;

        public TipoVehiculoService(IRepository repository)
        {
            this.repository = repository;
        }

        public async Task<bool> GuardarTipoVehiculo(TipoVehiculoDto tipoVehiculoDto)
        {
            if (tipoVehiculoDto != null)
            {
                //creamos modelo
                var tipoVehiculo = new TipoVehiculo
                {
                  Nombre = tipoVehiculoDto.Nombre
                };

                //guardamos modelo
                var UsuarioResult = await this.repository.Crear<TipoVehiculo>(tipoVehiculo);

                //verificamos modelo
                if (UsuarioResult != null)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            else
            {
                return false;
            }
        }

        public Task<UsuarioDto> ModificarTipoVehiculo(TipoVehiculoDto tipoVehiculoDto)
        {
            throw new NotImplementedException();
        }

        public async Task<List<TipoVehiculoDto>> ObtenerTipoVehiculo()
        {
            List<TipoVehiculoDto> result = new List<TipoVehiculoDto>();

            List<TipoVehiculo> listVehiculo = await this.repository.ObtenerLista<TipoVehiculo>();
            foreach (var item in listVehiculo)
            {
                result.Add(new TipoVehiculoDto()
                {
                    Nombre = item.Nombre,
                    Id = item.Id,
                    
                });

            }

            return result;
        }
    }
}
