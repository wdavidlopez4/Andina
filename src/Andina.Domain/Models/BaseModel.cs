using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace Andina.Domain.Models
{
    public abstract class BaseModel
    {
        [BsonId]
        public Guid Id { get; set; }
    }
}
