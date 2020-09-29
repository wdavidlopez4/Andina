using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Andina.Domain.Models.Interfaces
{
    public interface IRepository
    {
        public Task<T> Crear<T>(T objeto) where T : class;

        public Task<T> Obtener<T>(Guid id) where T : class;

        public Task<T> Obtener<T>(Expression<Func<T, bool>> expression) where T : class;
    }
}
