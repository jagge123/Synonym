using System.Text.RegularExpressions;

namespace SynonymAPI.Utils
{
    public static class Verify
    {
        //Verify that first letter is uppercase and rest lowercase
        public static bool FirstUpperRestLower(string input)
        {
            return Regex.IsMatch(input, @"^\p{Lu}\p{Ll}*$");
        }
    }
}
