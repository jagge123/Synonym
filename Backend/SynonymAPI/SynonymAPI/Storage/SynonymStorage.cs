using System.Collections.Generic;

namespace SynonymAPI.Application.Storage
{
    public static class SynonymStorage
    {
        public static HashSet<string> SynonymKeys = new HashSet<string>();
        public static Dictionary<string, HashSet<string>> Synonyms = new Dictionary<string, HashSet<string>>();
    }
}
