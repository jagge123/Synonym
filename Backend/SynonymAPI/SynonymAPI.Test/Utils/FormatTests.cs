using SynonymAPI.Utils;
using System;
using System.Collections.Generic;
using System.Text;
using Xunit;

namespace SynonymAPI.Test.Utils
{
    public class FormatTests
    {
        [Theory]
        [InlineData("Alle")]
        [InlineData("kAlle")]
        [InlineData("rALlle")]
        public void FirstUpperRestLower_Should_Return_FirstChar_As_Upper(string input)
        {
            var actual = Format.FirstUpperRestLower(input);

            Assert.True(char.IsUpper(actual[0]));
        }

        [Theory]
        [InlineData("tJENA")]
        [InlineData("LeANA")]
        [InlineData("FEna")]
        public void FirstUpperRestLower_Should_Return_All_Char_As_Lower_Except_First(string input)
        {
            var actual = Format.FirstUpperRestLower(input);

            var removedFirst = actual.Remove(0);
            foreach(char c in removedFirst)
                Assert.True(char.IsLower(c));
        }

        [Fact]
        public void FirstUpperRestLower_Should_Throw_Exception()
        {
            Assert.Throws<NullReferenceException>(() => Format.FirstUpperRestLower(null)); 
        }
    }
}
