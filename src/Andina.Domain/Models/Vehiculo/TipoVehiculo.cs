using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace Andina.Domain.Models.Vehiculo
{
    public class TipoVehiculo : BaseModel
    {
        [BsonElement("nombre")]
        public string Nombre { get; set; }
    }
}
