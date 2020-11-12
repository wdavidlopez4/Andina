using Andina.Domain.Dtos;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Andina.Application.MarcaVehiculoServices.Interfaces
{
    public interface IMarcaVehiculoService
    {
        public Task<List<MarcaVehiculoDto>> ObtenerMarcaVehiculo();

        public Task<bool> GuardarMarcaVehiculo(MarcaVehiculoDto marcaVehiculoDto);

        public Task<MarcaVehiculoDto> ModificarMarcaVehiculo(MarcaVehiculoDto marcaVehiculoDto);
    }
}
