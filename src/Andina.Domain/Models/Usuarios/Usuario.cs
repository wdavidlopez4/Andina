using System;
using System.Collections.Generic;
using System.Text;

namespace Andina.Domain.Models.Usuarios
{
    public class Usuario : BaseModel
    {
        public string Nombres { get; set; }

        public string Apellidos { get; set; }

        public string Email { get; set; }

        public string Contraseña { get; set; }

        public int NumeroIdentidad { get; set; }

        public TipoIdentidad TipoIdentidad { get; set; }

        public DateTime FechaExpedicionIdentidad { get; set; }

        public DateTime FechaDeNacimineto { get; set; }

        public Roles Rol { get; set; }


        public Usuario()
        {
        }

        public Usuario(string nombres, string apellidos, string email, string contraseña, Roles rol,
            int numeroIdentidad, TipoIdentidad tipoIdentidad, DateTime fechaExpedicionIdentidad,
            DateTime fechaDeNacimineto)
        {
            this.Nombres = nombres;
            this.Apellidos = apellidos;
            this.Email = email;
            this.Contraseña = contraseña;
            this.Rol = rol;
            this.NumeroIdentidad = numeroIdentidad;
            this.TipoIdentidad = tipoIdentidad;
            this.FechaDeNacimineto = fechaDeNacimineto;
            this.FechaExpedicionIdentidad = fechaExpedicionIdentidad;
        }
    }
}
