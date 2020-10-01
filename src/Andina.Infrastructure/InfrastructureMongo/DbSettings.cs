using Andina.Infrastructure.InfrastructureMongo.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Andina.Infrastructure.InfrastructureMongo
{
    public class DbSettings : ISettingsDb
    {
        public string ConnectionString { get; set; }

        public string DatabaseName { get; set; }
    }
}
