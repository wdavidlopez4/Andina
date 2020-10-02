using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace Andina.Domain.Models.Usuarios
{
    public class Usuario : BaseModel
    {
        [BsonElement("nombres")]
        public string Nombres { get; set; }

        [BsonElement("apellidos")]
        public string Apellidos { get; set; }

        [BsonElement("email")]
        public string Email { get; set; }

        [BsonElement("contrasena")]
        public string Contraseña { get; set; }

        [BsonElement("numeroIdentidad")]
        public int NumeroIdentidad { get; set; }

        [BsonElement("tipoIdentidad")]
        public TipoIdentidad TipoIdentidad { get; set; }

        [BsonElement("fechaExpedicionIdentidad")]
        public DateTime FechaExpedicionIdentidad { get; set; }

        [BsonElement("fechaDeNacimineto")]
        public DateTime FechaDeNacimineto { get; set; }

        [BsonElement("rolUsuario")]
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
