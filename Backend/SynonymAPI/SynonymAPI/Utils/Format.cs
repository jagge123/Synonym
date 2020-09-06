using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SynonymAPI.Utils
{
    public static class Format
    {
        //Format string to first letter upper and rest lower
        public static string FirstUpperRestLower(string input)
        {
            var lower = input.ToLower();
            return char.ToUpper(lower[0]) + lower.Substring(1);
        }
    }
}
