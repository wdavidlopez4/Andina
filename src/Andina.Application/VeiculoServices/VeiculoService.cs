using Andina.Application.VeiculoServices.Interfaces;
using Andina.Domain.Dtos;
using Andina.Domain.Models.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Andina.Application.VeiculoServices
{
    class VeiculoService : IVeiculoService
    {
        private readonly IRepository repository;

        public VeiculoService(IRepository repository)
        {
            this.repository = repository;
        }

        public Task<bool> GuardarVeiculo(VeiculoDto veiculoDto)
        {
            throw new NotImplementedException();
        }
    }
}
