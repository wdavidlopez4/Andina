using Andina.Domain.Dtos;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Andina.Application.VeiculoServices.Interfaces
{
    public interface IVeiculoService
    {
        public Task<bool> GuardarVeiculo(VeiculoDto veiculoDto);
    }
}
