using Andina.Infrastructure.InfrastructureMongo.Interfaces;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Text;

namespace Andina.Infrastructure.InfrastructureMongo
{
    public class ContextDb : IContextDb 
    {
        //atributo que representa el cliente "servidor"
        private IMongoClient cliente;

        //atributo que representa la db 
        private IMongoDatabase database;

        
        //constructor "llama al connet para conectarse"
        public ContextDb(ISettingsDb SettingsDb)
        {
            Connect<ISettingsDb>(SettingsDb);
        }


        //nos conectamos a la db "en lo que sea en lo que se comvierte T, eso debe implementar IDbSettings"
        public bool Connect<T>(T SettingsDb) where T : ISettingsDb
        {
            //nos conectamos a la db
            cliente = new MongoClient(SettingsDb.ConnectionString);
            database = cliente.GetDatabase(SettingsDb.DatabaseName);

            if (database != null)
            {
                return true;
            }
            return false;
        }

        //retornamos la colleccion
        public IMongoCollection<T> GetCollection<T>() where T : class
        {
            //obtenemos la coleccion de tipo T
            IMongoCollection<T> Collection = database.GetCollection<T>(typeof(T).Name);
            return Collection;
        }
    }
}
