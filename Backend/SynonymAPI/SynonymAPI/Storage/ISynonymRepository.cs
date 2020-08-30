using SynonymAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SynonymAPI.Storage
{
    public interface ISynonymRepository
    {
        SynonymModel Add(SynonymModel model);
        SynonymModel Get(string keyword);
    }
}
