using MongoDB.Bson.Serialization.Attributes;
using Andina.Domain.Models.Ciudades;

namespace Andina.Domain.Models.Rutas
{
    public class Ruta : BaseModel
    {

        [BsonElement("nombre")]
        public string Nombre { get; set; }

        [BsonElement("numeroNodos")]
        public int NumeroNodos { get; set; }

        [BsonElement("nodo")]
        public Ciudad Nodo { get; set; }

        [BsonElement("estado")]
        public int Estado { get; set; }

        public Ruta()
        {
        }

        public Ruta(int id, string nombre, int numeroNodos, Ciudad nodo, int estado)
        {
            this.Nombre = nombre;
            this.NumeroNodos = numeroNodos;
            this.Nodo = nodo;
            this.Estado = estado;
        }
    }
}
