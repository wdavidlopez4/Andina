using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Text;

namespace Andina.Infrastructure.InfrastructureMongo.Interfaces
{
    public interface IContextDb
    {
        public bool Connect<T>(T dbSettings) where T : ISettingsDb;

        public IMongoCollection<T> GetCollection<T>() where T : class;
    }
}
