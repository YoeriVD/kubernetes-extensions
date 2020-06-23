using System;
using System.Text.Json.Serialization;

namespace shell_site
{
    [Serializable]
    public class ExtensionConfiguration
    {
        public string Extensions { get; set; }
        [JsonIgnore]
        public string[] EnabledExtensions => Extensions.Split(",");
    }
}