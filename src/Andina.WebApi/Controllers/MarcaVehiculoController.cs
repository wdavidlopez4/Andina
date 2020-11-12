using Andina.Application.MarcaVehiculoServices.Interfaces;
using Andina.Domain.Dtos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Andina.WebApi.Controllers
{
    [Produces("Application/json")]
    [Route("api/MarcaVehiculo")]
    [ApiController]
    public class MarcaVehiculoController : ControllerBase
    {
        private readonly IMarcaVehiculoService marcaVehiculoService;

        private readonly IConfiguration configuration;

        public MarcaVehiculoController(IMarcaVehiculoService marcaVehiculoService, IConfiguration configuration)
        {
            this.marcaVehiculoService = marcaVehiculoService;
            this.configuration = configuration;
        }


        [Route("CrearMarcaVehiculo")]
        [HttpPost]
        public async Task<IActionResult> CrearMarcaVehiculo([FromBody] MarcaVehiculoDto vehiculoDto)
        {
            if (ModelState.IsValid)
            {
                bool usuarioRest = await this.marcaVehiculoService.GuardarMarcaVehiculo(vehiculoDto);

                if (usuarioRest)
                {
                    return Ok(vehiculoDto);
                }
                else
                {
                    return BadRequest("no se creo el tipo vehiculo... compruebe los datos");
                }
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        [Route("ObtenerMarcaVehiculo")]
        [HttpPost]
        public async Task<IActionResult> ObtenerMarcaVehiculo()
        {
            if (ModelState.IsValid)
            {
                var listMarcaVehiculos = await this.marcaVehiculoService.ObtenerMarcaVehiculo();

                return Ok(listMarcaVehiculos);
            }
            else
            {
                return BadRequest(ModelState);
            }
        }
    }
}
