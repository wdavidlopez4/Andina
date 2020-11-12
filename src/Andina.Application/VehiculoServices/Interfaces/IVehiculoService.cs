using Andina.Domain.Dtos;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Andina.Application.VehiculoServices.Interfaces
{
    public interface IVehiculoService
    {
        public Task<List<VehiculoDto>> ObtenerVehiculos();

        public Task<bool> GuardarVehiculo(VehiculoDto veiculoDto);

        public Task<UsuarioDto> ModificarVehiculo(VehiculoDto veiculoDto);
    }
}
