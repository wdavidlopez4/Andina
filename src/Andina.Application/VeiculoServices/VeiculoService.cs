using Andina.Application.VeiculoServices.Interfaces;
using Andina.Domain.Dtos;
using Andina.Domain.Models;
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

        public async Task<bool> GuardarVeiculo(VeiculoDto veiculoDto)
        {
            if(veiculoDto == null)
            {
                return false;
            }
            else
            {
                var modelo = new VeiculoModel
                {
                    Marca = veiculoDto.Marca,
                    Estado = veiculoDto.Estado,
                    Placa = veiculoDto.Placa
                };

                var seCreo = await this.repository.Crear<VeiculoModel>(modelo);

                if(seCreo == null)
                {
                    return false;
                }
                else
                {
                    return true;
                }
            }

            
        }
    }
}
