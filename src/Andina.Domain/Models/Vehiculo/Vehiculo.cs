using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace Andina.Domain.Models.Vehiculo
{
    public class Vehiculo : BaseModel
    {
        [BsonElement("idTipo")]
        public TipoVehiculo TipoVehiculo { get; set; }

        [BsonElement("idMarca")]
        public MarcaVehiculo MarcaVehiculo { get; set; }

        [BsonElement("placa")]
        public string Placa { get; set; }

        [BsonElement("capacidad")]
        public int Capacidad { get; set; }

        [BsonElement("estado")]
        public bool Estado { get; set; }
        
    }
}
