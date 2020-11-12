using Andina.Domain.Dtos;
using Andina.Domain.Models.Ciudades;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Andina.Application.RutaServices.Interfaces
{
    public interface IRutaService
    {
        public Task<RutaDto> ObtenerRuta();

        public Task<RutaDto> ObtenerRuta(Guid id);

        public Task<bool> GuardarRuta(RutaDto rutaDto);

        public Task<RutaDto> ObtenerRuta(Ciudad ciudad);

        public Task<RutaDto> ModificarRuta(RutaDto rutaDto);

        public Task<bool> ExisteRuta(Guid Id);
    }
}
