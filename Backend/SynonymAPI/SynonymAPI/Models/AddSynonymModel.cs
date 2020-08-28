using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SynonymAPI.Models
{
    public class AddSynonymModel
    {
        public string KeyWord { get; set; }
        public HashSet<string> Synonyms { get; set; }
    }
}
