﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Andina.Infrastructure.InfrastructureMongo.Interfaces
{
    public interface ISettingsDb
    {
        public string ConnectionString { get; set; }

        public string DatabaseName { get; set; }
    }
}
