using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SynonymAPI.Application.Storage
{
    public static class SynonymStorage
    {
        public static Dictionary<string, HashSet<string>> Synonyms = new Dictionary<string, HashSet<string>>();
    }
}
