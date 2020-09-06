using System.Collections.Generic;

namespace SynonymAPI.Models
{
    public class SynonymModel
    {
        public string KeyWord { get; set; }
        public HashSet<string> Synonyms { get; set; }
    }
}
