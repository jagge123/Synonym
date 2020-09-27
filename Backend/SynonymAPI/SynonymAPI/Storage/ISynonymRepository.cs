using SynonymAPI.Models;

namespace SynonymAPI.Storage
{
    public interface ISynonymRepository
    {
        SynonymModel Add(SynonymModel model);
        SynonymModel Get(string keyword);

        SynonymModel Update(SynonymModel model);
    }
}
