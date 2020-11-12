using Andina.Domain.Dtos;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Andina.Application.TipoVehiculoServices.Interfaces
{
    public interface ITipoVehiculoService
    {
        public Task<List<TipoVehiculoDto>> ObtenerTipoVehiculo();

        public Task<bool> GuardarTipoVehiculo(TipoVehiculoDto tipoVehiculoDto);

        public Task<UsuarioDto> ModificarTipoVehiculo(TipoVehiculoDto tipoVehiculoDto);
    }
}
