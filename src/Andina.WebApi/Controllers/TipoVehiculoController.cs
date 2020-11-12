using Andina.Application.TipoVehiculoServices.Interfaces;
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
    [Route("api/TipoVehiculo")]
    [ApiController]
    public class TipoVehiculoController : ControllerBase
    {
        private readonly ITipoVehiculoService tipoVehiculoService;

        private readonly IConfiguration configuration;

        public TipoVehiculoController(ITipoVehiculoService tipoVehiculoService, IConfiguration configuration)
        {
            this.tipoVehiculoService = tipoVehiculoService;
            this.configuration = configuration;
        }


        [Route("CrearTipoVehiculo")]
        [HttpPost]
        public async Task<IActionResult> CrearTipoVehiculo([FromBody] TipoVehiculoDto vehiculoDto)
        {
            if (ModelState.IsValid)
            {
                bool usuarioRest = await this.tipoVehiculoService.GuardarTipoVehiculo(vehiculoDto);

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

        [Route("ObtenerTipoVehiculo")]
        [HttpPost]
        public async Task<IActionResult> ObtenerTipoVehiculo()
        {
            if (ModelState.IsValid)
            {
                var listTipoVehiculos = await this.tipoVehiculoService.ObtenerTipoVehiculo();

                return Ok(listTipoVehiculos);
            }
            else
            {
                return BadRequest(ModelState);
            }
        }
    }
}
