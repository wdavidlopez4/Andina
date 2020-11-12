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

        public Guid IdMarcaVehiculo { get; set; }
        public MarcaVehiculoDto MarcaVehiculo { get; set; }

        public Guid IdTipoVehiculo { get; set; }
        public TipoVehiculoDto TipoVehiculo { get; set; }
    }
}
