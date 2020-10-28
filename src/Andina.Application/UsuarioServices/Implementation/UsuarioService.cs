using Andina.Application.UsuarioServices.Interfaces;
using Andina.Domain.Dtos;
using Andina.Domain.Models.Interfaces;
using Andina.Domain.Models.Usuarios;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Andina.Application.UsuarioServices.Implementation
{
    public class UsuarioService : IUsuarioService
    {
        private readonly IRepository repository;

        public UsuarioService(IRepository repository)
        {
            this.repository = repository;
        }

        public async Task<bool> GuardarUsuario(UsuarioDto usuarioDto)
        {
            //verificamos dto
            if (usuarioDto != null)
            {
                //creamos modelo
                var usuario = new Usuario
                {
                    Nombres = usuarioDto.Nombres,
                    Apellidos = usuarioDto.Apellidos,
                    Email = usuarioDto.Email,
                    Contraseña = usuarioDto.Contraseña,
                    Rol = usuarioDto.Rol,
                    NumeroIdentidad = usuarioDto.NumeroIdentidad,
                    TipoIdentidad = usuarioDto.TipoIdentidad,
                    FechaExpedicionIdentidad = usuarioDto.FechaExpedicionIdentidad,
                    FechaDeNacimineto = usuarioDto.FechaDeNacimineto

                };

                //guardamos modelo
                var UsuarioResult = await this.repository.Crear<Usuario>(usuario);

                //verificamos modelo
                if (usuario != null)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            else
            {
                return false;
            }

        }

        public async Task<UsuarioDto> ObtenerUsuario(Guid id)
        {
            //obtener modelo
            var usuario = await this.repository.Obtener<Usuario>(id);

            //verificar modelo
            if (usuario != null)
            {
                //crear dto de modelo y retornarlo
                return new UsuarioDto
                {
                    Nombres = usuario.Nombres,
                    Apellidos = usuario.Apellidos,
                    Email = usuario.Email,
                    Contraseña = usuario.Contraseña,
                    Rol = usuario.Rol,
                    NumeroIdentidad = usuario.NumeroIdentidad,
                    TipoIdentidad = usuario.TipoIdentidad,
                    FechaExpedicionIdentidad = usuario.FechaExpedicionIdentidad,
                    FechaDeNacimineto = usuario.FechaDeNacimineto
                };

            }
            else
            {
                return null;
            }

        }

        public async Task<UsuarioDto> ObtenerUsuario(string email, string contraseña)
        {
            if (email != null && contraseña != null)
            {
                Usuario usuario = await this.repository.Obtener<Usuario>(x => x.Email == email && x.Contraseña == contraseña);

                if (usuario != null)
                {
                    return new UsuarioDto
                    {
                        Nombres = usuario.Nombres,
                        Apellidos = usuario.Apellidos,
                        Email = usuario.Email,
                        Contraseña = usuario.Contraseña,
                        Rol = usuario.Rol,
                        NumeroIdentidad = usuario.NumeroIdentidad,
                        TipoIdentidad = usuario.TipoIdentidad,
                        FechaExpedicionIdentidad = usuario.FechaExpedicionIdentidad,
                        FechaDeNacimineto = usuario.FechaDeNacimineto
                    };
                }
                else
                {
                    return null;
                }
            }
            else
            {
                return null;
            }
            
        }

        public async Task<bool> ExisteUsuario(Guid id)
        {
            if (id != null)
            {
                return await this.repository.Existe<Usuario>(x => x.Id == id);
            }
            else
            {
                return false;
            }
        }

        public async Task<UsuarioDto> ModificarUsuario(UsuarioDto usuarioDto)
        {
            if (usuarioDto != null)
            {
                //creamos
                var usuario = new Usuario
                {
                    Id = usuarioDto.Id,
                    Apellidos = usuarioDto.Apellidos,
                    Contraseña = usuarioDto.Contraseña,
                    Email = usuarioDto.Email,
                    FechaDeNacimineto = usuarioDto.FechaDeNacimineto,
                    FechaExpedicionIdentidad = usuarioDto.FechaExpedicionIdentidad,
                    Nombres = usuarioDto.Nombres,
                    NumeroIdentidad = usuarioDto.NumeroIdentidad,
                    Rol = usuarioDto.Rol,
                    TipoIdentidad = usuarioDto.TipoIdentidad
                };

                //modificamos
                var result = await this.repository.Modificar<Usuario>(x => x.Id == usuario.Id, usuario);

                //retornamos
                return result != null ? usuarioDto : null;
            }
            else
            {
                return null;
            }
        }
    }
}
