using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Andina.Application.RutaServices.Interfaces;
using Andina.Domain.Dtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace Andina.WebApi.Controllers
{
    [Produces("Application/json")]
    [Route("api/Ruta")]
    [ApiController]
    public class RutaController : ControllerBase
    {

        private readonly IRutaService rutaService;

        public RutaController(IRutaService rutaService, IConfiguration configuration)
        {
            this.rutaService = rutaService;
        }

        [Route("CrearRuta")]
        [HttpPost]
        public async Task<IActionResult> CrearRuta([FromBody] RutaDto rutaDto)
        {
            if (ModelState.IsValid)
            {
                bool rutaRest = await this.rutaService.GuardarRuta(rutaDto);

                if (!rutaRest)
                    return BadRequest("no se creo el ruta");

                return Ok();
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        [Route("ActualizarRuta")]
        [HttpPost]
        public async Task<IActionResult> ActualizarRuta([FromBody] RutaDto ruta)
        {
            if (ModelState.IsValid)
            {
                //se puede obtener por id o por email
                var seObtuboPorID = await rutaService.ExisteRuta(ruta.Id);

                if (seObtuboPorID)
                {
                    var usuarioDto = await rutaService.ModificarRuta(ruta);
                    return Ok(usuarioDto);
                }
                else
                {
                    return BadRequest("el usuario que intenta actualizar no existe");
                }
            }
            else
            {
                return BadRequest("No se pudo Actualizar los datos del usuario...");
            }

        }

        [Route("ObtenerListaRutas")]
        [HttpPost]
        public async Task<IActionResult> ObtenerListaRutas([FromBody] RutaDto rutaDto)
        {
            if (ModelState.IsValid)
            {
                var rutaResult = await rutaService.ObtenerRuta();
                if (rutaResult != null)
                {
                    return Ok(rutaResult);
                }
                else
                {
                    return BadRequest(new { message = "No pudimos encontrar la ruta, intente de nuevo. " });
                }
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        [Route("ObtenerRuta")]
        [HttpPost]
        public async Task<IActionResult> ObtenerRuta([FromBody] RutaDto rutaDto)
        {
            if (ModelState.IsValid)
            {
                var rutaResult = await rutaService.ObtenerRuta(rutaDto.Id);
                if (rutaResult != null)
                {
                    return Ok(rutaResult);
                }
                else
                {
                    return BadRequest(new { message = "No pudimos encontrar la ruta, intente de nuevo. " });
                }
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        [Route("ObtenerRutaCiudad")]
        [HttpPost]
        public async Task<IActionResult> ObtenerRutaCiudad([FromBody] CiudadDto ciudadDto)
        {
            if (ModelState.IsValid)
            {
                var rutaResult = await rutaService.ObtenerRuta(ciudadDto.Id);
                if (rutaResult != null)
                {
                    return Ok(rutaResult);
                }
                else
                {
                    return BadRequest(new { message = "No pudimos encontrar las rutas de la ciduad, intente de nuevo. " });
                }
            }
            else
            {
                return BadRequest(ModelState);
            }
        }
    }
}
