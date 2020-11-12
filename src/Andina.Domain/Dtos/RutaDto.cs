using Andina.Domain.Models.Rutas;
using Andina.Domain.Models.Ciudades;
using System;

namespace Andina.Domain.Dtos
{
    public class RutaDto
    {
        public Guid Id { get; set; }

        public string Nombre { get; set; }

        public int NumeroNodos { get; set; }

        public Ciudad Nodo { get; set; }

        public int Estado { get; set; }
    }
}
