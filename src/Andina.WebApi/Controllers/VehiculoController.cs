using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Andina.Application.VehiculoServices.Interfaces;
using Andina.Domain.Dtos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace Andina.WebApi.Controllers
{
    [Produces("Application/json")]
    [Route("api/Vehiculo")]
    [ApiController]
    public class VehiculoController : ControllerBase
    {
        private readonly IVehiculoService vehiculoService;

        private readonly IConfiguration configuration;

        public VehiculoController(IVehiculoService vehiculoService, IConfiguration configuration)
        {
            this.vehiculoService = vehiculoService;
            this.configuration = configuration;
        }


        [Route("CrearVehiculo")]
        [HttpPost]
        public async Task<IActionResult> CrearVehiculo([FromBody] VehiculoDto vehiculoDto)
        {
            if (ModelState.IsValid)
            {
                bool usuarioRest = await this.vehiculoService.GuardarVehiculo(vehiculoDto);

                if (usuarioRest)
                {
                    return Ok(vehiculoDto);
                }
                else
                {
                    return BadRequest("no se creo el vehiculo... compruebe los datos");
                }
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        [Route("ObtenerVehiculos")]
        [HttpPost]
        public async Task<IActionResult> ObtenerVehiculos()
        {
            if (ModelState.IsValid)
            {
                var listVehiculos = await this.vehiculoService.ObtenerVehiculos();

                return Ok(listVehiculos);
            }
            else
            {
                return BadRequest(ModelState);
            }
        }
    }
}
