using Andina.Application.VehiculoServices.Interfaces;
using Andina.Domain.Dtos;
using Andina.Domain.Models.Interfaces;
using Andina.Domain.Models.Vehiculo;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Andina.Application.VehiculoServices.Implementation
{
    public class VehiculoService : IVehiculoService
    {
        private readonly IRepository repository;

        public VehiculoService(IRepository repository)
        {
            this.repository = repository;
        }

        public async Task<bool> GuardarVehiculo(VehiculoDto veiculoDto)
        {
            if (veiculoDto != null)
            {
                //creamos modelo
                var vehiculo = new Vehiculo
                {
                    TipoVehiculo = new TipoVehiculo()
                    {
                        Id = veiculoDto.IdTipo
                    },
                    MarcaVehiculo = new MarcaVehiculo()
                    {
                        Id = veiculoDto.IdMarca
                    },
                    Placa = veiculoDto.Placa,
                    Estado = veiculoDto.Estado,
                    Capacidad = veiculoDto.Capacidad
                };

                //guardamos modelo
                var UsuarioResult = await this.repository.Crear<Vehiculo>(vehiculo);

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

        public Task<UsuarioDto> ModificarVehiculo(VehiculoDto veiculoDto)
        {
            throw new NotImplementedException();
        }

        public async Task<List<VehiculoDto>> ObtenerVehiculos()
        {
            List<VehiculoDto> result = new List<VehiculoDto>();

            List<Vehiculo> listVehiculo = await this.repository.ObtenerLista<Vehiculo>();
            foreach (var item in listVehiculo)
            {
                result.Add(new VehiculoDto()
                {
                    Capacidad = item.Capacidad,
                    Estado = item.Estado,
                    IdMarca = item.MarcaVehiculo != null ? item.MarcaVehiculo.Id : Guid.Empty,
                    IdTipo = item.TipoVehiculo != null ? item.TipoVehiculo.Id : Guid.Empty,
                    Placa = item.Placa,
                });

            }

            return result;
        }
    }
}
