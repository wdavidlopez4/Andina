using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Andina.Application.VeiculoServices.Interfaces;
using Andina.Domain.Dtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Andina.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AutomovilController : ControllerBase
    {
        private readonly IVeiculoService veiculoService;

        public AutomovilController(IVeiculoService veiculoService)
        {
            this.veiculoService = veiculoService;
        }

        public async Task<ActionResult<VeiculoDto>> GuardarVeiculo(string marca, string placa, string estado)
        {
            var dto = new VeiculoDto
            {
                Marca = marca,
                Placa = placa,
                Estado = estado
            };

            var seGuardo = await this.veiculoService.GuardarVeiculo(dto);

            if(!seGuardo)
            {
                dto.Mensaje = "Incorrecto, No se pudo guardar";
                return dto;
            }
            else
            {
                dto.Mensaje = "Perfecto, se guardo correctamente";
                return dto;
            }
        }
    }
}
