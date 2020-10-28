using Andina.Domain.Models.Usuarios;
using System;
using System.Collections.Generic;
using System.Text;

namespace Andina.Domain.Dtos
{
    public class UsuarioDto
    {
        public Guid Id { get; set; }

        public string Nombres { get; set; }

        public string Apellidos { get; set; }

        public string Email { get; set; }

        public string Contraseña { get; set; }

        public int NumeroIdentidad { get; set; }

        public TipoIdentidad TipoIdentidad { get; set; }

        public DateTime FechaExpedicionIdentidad { get; set; }

        public DateTime FechaDeNacimineto { get; set; }

        public Roles Rol { get; set; }
    }
}
