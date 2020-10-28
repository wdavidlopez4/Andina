using Andina.Domain.Dtos;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Andina.Application.UsuarioServices.Interfaces
{
    public interface IUsuarioService
    {
        public Task<UsuarioDto> ObtenerUsuario(Guid id);

        public Task<bool> GuardarUsuario(UsuarioDto usuarioDto);

        public Task<UsuarioDto> ObtenerUsuario(string email, string contraseña);

        public Task<bool> ExisteUsuario(Guid Id);

        public Task<UsuarioDto> ModificarUsuario(UsuarioDto usuarioDto);
    }
}
