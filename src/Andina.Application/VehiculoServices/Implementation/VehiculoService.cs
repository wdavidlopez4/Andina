using Andina.Application.VehiculoServices.Interfaces;
using Andina.Domain.Dtos;
using Andina.Domain.Models.Interfaces;
using Andina.Domain.Models.Vehiculo;
using System;
using System.Collections.Generic;
using System.Linq;
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
                var marca = await this.repository.Obtener<MarcaVehiculo>(x => x.Id == veiculoDto.IdMarcaVehiculo);

                if (marca == null)
                {
                    return false;
                }

                var tipo = await this.repository.Obtener<TipoVehiculo>(x => x.Id == veiculoDto.IdTipoVehiculo);
                if (tipo == null)
                {
                    return false;
                }

                //creamos modelo
                var vehiculo = new Vehiculo
                {
                    TipoVehiculo = tipo,
                    MarcaVehiculo = marca,
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
                    IdMarcaVehiculo = item.MarcaVehiculo != null ? item.MarcaVehiculo.Id : Guid.Empty,
                    MarcaVehiculo = new MarcaVehiculoDto() { Id = item.MarcaVehiculo.Id, Nombre = item.MarcaVehiculo.Nombre },
                    IdTipoVehiculo = item.TipoVehiculo != null ? item.TipoVehiculo.Id : Guid.Empty,
                    TipoVehiculo = new TipoVehiculoDto() { Id = item.TipoVehiculo.Id, Nombre = item.TipoVehiculo.Nombre },
                    Placa = item.Placa,
                });
            }

            return result;
        }
    }
}
