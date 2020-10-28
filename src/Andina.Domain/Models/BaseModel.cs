using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.IdGenerators;
using System;
using System.Collections.Generic;
using System.Text;

namespace Andina.Domain.Models
{
    public abstract class BaseModel
    {
        [BsonId(IdGenerator = typeof(GuidGenerator)), BsonRepresentation(BsonType.String)]
        public Guid Id { get; set; }
    }
}
