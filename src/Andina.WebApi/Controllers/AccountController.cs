using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Andina.Application.UsuarioServices.Interfaces;
using Andina.Domain.Dtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace Andina.WebApi.Controllers
{
    [Produces("Application/json")]
    [Route("api/Account")]
    [ApiController]
    public class AccountController : ControllerBase
    {

        private readonly IUsuarioService usuarioService;

        private readonly IConfiguration configuration;

        public AccountController(IUsuarioService usuarioService, IConfiguration configuration)
        {
            this.usuarioService = usuarioService;
            this.configuration = configuration;
        }

        [Route("CrearUsuario")]
        [HttpPost]
        public async Task<IActionResult> CrearUsuario([FromBody] UsuarioDto usuarioDto)
        {
            if (ModelState.IsValid)
            {
                bool usuarioRest = await this.usuarioService.GuardarUsuario(usuarioDto);

                if (usuarioRest)
                {
                    return ConstruirToken(usuarioDto);
                }
                else
                {
                    return BadRequest("no se creo el usuario ni se genero el token... compruebe los datos");
                }
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        [Route("Logear")]
        [HttpPost]
        public async Task<IActionResult> Logear([FromBody] UsuarioDto usuarioDto)
        {
            if (ModelState.IsValid)
            {
                var usuarioResult = await this.usuarioService.ObtenerUsuario(usuarioDto.Email, usuarioDto.Contraseña);
                if (usuarioResult != null)
                {
                    return ConstruirToken(usuarioResult);
                }
                else
                {
                    return BadRequest("no pudimos recupear el usuario con el correo dado, intente de nuevo. ");
                }
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        private IActionResult ConstruirToken(UsuarioDto usuarioDto)
        {
            //creamos el claims
            var Claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.UniqueName, usuarioDto.Email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim("Nombres", usuarioDto.Nombres),
                new Claim("Apellidos", usuarioDto.Apellidos)
            };

            //creamos la clave la cual tendra una variable de ambiente "Clave secreta" tambien la credencial y el expide
            var clave = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(this.configuration["CLAVE_SECRETA"]));
            var credencial = new SigningCredentials(clave, SecurityAlgorithms.HmacSha256);
            var expide = DateTime.UtcNow.AddDays(3);

            //creamos el token con los datos anteriores
            JwtSecurityToken token = new JwtSecurityToken(
                issuer: "andina.com",
                audience: "andina.com",
                claims: Claims,
                expires: expide,
                signingCredentials: credencial
                );

            //retornamos el token y el expide del token
            return Ok(new
            {
                token = new JwtSecurityTokenHandler().WriteToken(token),
                expiration = expide
            });
        }


        [Route("ActualizarUsuario")]
        [HttpPost]
        public async Task<IActionResult> ActualizarUsuario([FromBody] UsuarioDto usuario)
        {
            if (ModelState.IsValid)
            {
                //se puede obtener por id o por email
                var seObtuboPorID = await usuarioService.ExisteUsuario(usuario.Id);

                if (seObtuboPorID)
                {
                    var usuarioDto = await usuarioService.ModificarUsuario(usuario);
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
    }
}
