using Andina.Domain.Models.Rutas;
using System;
using System.Collections.Generic;
using System.Text;

namespace Andina.Domain.Dtos
{
    public class CiudadDto
    {
        public Guid Id { get; set; }

        public string Nombre { get; set; }

        public int Estado { get; set; }
    }
}
