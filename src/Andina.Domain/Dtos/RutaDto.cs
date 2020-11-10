using Andina.Domain.Models.Rutas;
using Andina.Domain.Models.Ciudades;

namespace Andina.Domain.Dtos
{
    public class RutaDto
    {
        public int Id { get; set; } 

        public string Nombre { get; set; }

        public int NumeroNodos { get; set; }

        public Ciudad Nodo { get; set; }

        public int Estado { get; set; }
    }
}
