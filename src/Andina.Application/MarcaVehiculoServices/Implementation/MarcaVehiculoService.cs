using Andina.Application.MarcaVehiculoServices.Interfaces;
using Andina.Domain.Dtos;
using Andina.Domain.Models.Interfaces;
using Andina.Domain.Models.Vehiculo;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Andina.Application.MarcaVehiculoServices.Implementation
{
    public class MarcaVehiculoService : IMarcaVehiculoService
    {
        private readonly IRepository repository;

        public MarcaVehiculoService(IRepository repository)
        {
            this.repository = repository;
        }

        public async Task<bool> GuardarMarcaVehiculo(MarcaVehiculoDto marcaVehiculoDto)
        {
            if (marcaVehiculoDto != null)
            {
                //creamos modelo
                var tipoVehiculo = new MarcaVehiculo
                {
                    Nombre = marcaVehiculoDto.Nombre
                };

                //guardamos modelo
                var UsuarioResult = await this.repository.Crear<MarcaVehiculo>(tipoVehiculo);

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

        public Task<MarcaVehiculoDto> ModificarMarcaVehiculo(MarcaVehiculoDto marcaVehiculoDto)
        {
            throw new NotImplementedException();
        }

        public async Task<List<MarcaVehiculoDto>> ObtenerMarcaVehiculo()
        {
            List<MarcaVehiculoDto> result = new List<MarcaVehiculoDto>();

            List<MarcaVehiculo> listVehiculo = await this.repository.ObtenerLista<MarcaVehiculo>();
            foreach (var item in listVehiculo)
            {
                result.Add(new MarcaVehiculoDto()
                {
                    Nombre = item.Nombre,
                    Id = item.Id,

                });

            }

            return result;
        }
    }
}
