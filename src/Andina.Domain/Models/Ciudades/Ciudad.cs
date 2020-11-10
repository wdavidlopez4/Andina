using MongoDB.Bson.Serialization.Attributes;

namespace Andina.Domain.Models.Ciudades
{
    public class Ciudad : BaseModel
    {
        [BsonElement("nombre")]
        public string Nombre { get; set; }

        [BsonElement("estado")]
        public int Estado { get; set; }

        public Ciudad()
        {
        }

        public Ciudad(string nombre, int estado)
        {
            this.Nombre = nombre;
            this.Estado = estado;
        }
    }
}
