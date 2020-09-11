using System;
using System.Collections.Generic;
using System.Text;

namespace Andina.Domain.Models
{
    public class VeiculoModel : BaseModel
    {
        public string Placa { get; set; }

        public string Marca { get; set; }

        public string Estado { get; set; }
    }
}
