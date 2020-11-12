using System;
using System.Collections.Generic;
using System.Text;

namespace Andina.Domain.Dtos
{
    public class VehiculoDto
    {
        public string Placa { get; set; }

        public string Marca { get; set; }

        public bool Estado { get; set; }

        public string Mensaje { get; set; }

        public int Capacidad { get; set; }

        public Guid IdMarca { get; set; }
        public Guid IdTipo { get; set; }
    }
}
