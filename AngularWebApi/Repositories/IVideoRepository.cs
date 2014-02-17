using System.Collections.Generic;
using AngularWebApi.Domain;

namespace AngularWebApi.Repositories
{
	public interface IVideoRepository
	{
		IEnumerable<Video> GetAll();
		Video GetById(int videoId);
		void Add(Video video);
		int Update(Video videoId);
		int Delete(int id);
	}
}
