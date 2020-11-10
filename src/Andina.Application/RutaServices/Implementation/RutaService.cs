using Andina.Application.RutaServices.Interfaces;
using Andina.Domain.Dtos;
using Andina.Domain.Models.Ciudades;
using Andina.Domain.Models.Interfaces;
using Andina.Domain.Models.Rutas;
using System;
using System.Threading.Tasks;

namespace Andina.Application.RutaServices.Implementation
{
    public class RutaService : IRutaService
    {
        private readonly IRepository repository;

        public RutaService(IRepository repository)
        {
            this.repository = repository;
        }

        public async Task<bool> GuardarRuta(RutaDto rutaDto)
        {
            //verificamos dto
            if (rutaDto != null)
            {
                //creamos modelo
                var ruta = new Ruta
                {
                    Nombre = rutaDto.Nombre,
                    NumeroNodos = rutaDto.NumeroNodos,
                    Nodo = rutaDto.Nodo,
                    Estado = rutaDto.Estado
                };

                //guardamos modelo
                var RutaResult = await this.repository.Crear<Ruta>(ruta);

                //verificamos modelo
                if (ruta != null)
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

        public async Task<RutaDto> ObtenerRuta(Guid id)
        {
            //obtener modelo
            var ruta = await this.repository.Obtener<Ruta>(id);

            //verificar modelo
            if (ruta != null)
            {
                //crear dto de modelo y retornarlo
                return new RutaDto
                {
                    Nombre = ruta.Nombre,
                    NumeroNodos = ruta.NumeroNodos,
                    Nodo = ruta.Nodo,
                    Estado = ruta.Estado
                };

            }
            else
            {
                return null;
            }

        }

        public async Task<RutaDto> ObtenerRuta(Ciudad ciudad)
        {
            if (ciudad != null)
            {
                Ruta ruta = await this.repository.Obtener<Ruta>(x => x.Nodo == ciudad);

                if (ruta != null)
                {
                    return new RutaDto
                    {
                        Nombre = ruta.Nombre,
                        NumeroNodos = ruta.NumeroNodos,
                        Nodo = ruta.Nodo,
                        Estado = ruta.Estado
                    };
                }
                else
                {
                    return null;
                }
            }
            else
            {
                return null;
            }
            
        }
        public async Task<RutaDto> ModificarRuta(RutaDto rutaDto)
        {
            if (rutaDto != null)
            {
                //creamos
                var ruta = new Ruta
                {
                    Id = rutaDto.Id,
                    Nombre = rutaDto.Nombre,
                    NumeroNodos = rutaDto.NumeroNodos,
                    Nodo = rutaDto.Nodo,
                    Estado = rutaDto.Estado
                };

                //modificamos
                var result = await this.repository.Modificar<Ruta>(x => x.Id == ruta.Id, ruta);

                //retornamos
                return result != null ? rutaDto : null;
            }
            else
            {
                return null;
            }
        }
    }
}
