using Andina.Domain.Models.Interfaces;
using Andina.Infrastructure.InfrastructureMongo.Interfaces;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Andina.Infrastructure.InfrastructureRepository
{
    public class Repository : IRepository
    {
        private readonly IContextDb contextDb;

        public Repository(IContextDb contextDb)
        {
            this.contextDb = contextDb;
        }

        public async Task<T> Crear<T>(T objeto) where T : class
        {
            try
            {
                if (objeto != null)
                {
                    await contextDb.GetCollection<T>().InsertOneAsync(objeto);
                    return objeto;
                }
                else
                {
                    throw new ArgumentNullException(typeof(T).Name + " objeto es nulo");
                }
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public async Task<T> Obtener<T>(Guid id) where T : class
        {
            try
            {
                //creamos un objeto mongo que contiene el id 
                var objectId = new ObjectId(id.ToString());

                //creamos el filtro
                FilterDefinition<T> filter = Builders<T>.Filter.Eq("_id", objectId);

                //obtenemos el objeto
                return await contextDb.GetCollection<T>().FindAsync<T>(filter).Result.FirstOrDefaultAsync();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<T> Obtener<T>(Expression<Func<T, bool>> expression) where T : class
        {
            try
            {
                return await contextDb.GetCollection<T>().AsQueryable().Where(expression).FirstOrDefaultAsync();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
