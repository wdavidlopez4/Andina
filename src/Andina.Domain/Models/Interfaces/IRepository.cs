using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Andina.Domain.Models.Interfaces
{
    public interface IRepository
    {
        public Task<T> Crear<T>();
    }
}
