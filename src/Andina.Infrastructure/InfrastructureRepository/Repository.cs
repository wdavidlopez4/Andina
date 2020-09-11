using Andina.Domain.Models.Interfaces;
using Andina.Infrastructure.InfrastructureMongo.Interfaces;
using System;
using System.Collections.Generic;
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
                await contextDb.GetCollection<T>().InsertOneAsync(objeto);
                return objeto;
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
    }
}
