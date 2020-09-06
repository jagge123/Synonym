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
