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
    }
}
