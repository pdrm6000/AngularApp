using System.Collections.Generic;
using System.Web.Http;
using AngularWebApi.Domain;
using AngularWebApi.Repositories;

namespace AngularWebApi.Controllers
{
	
	public class VideoController : ApiController
	{
		private readonly IVideoRepository _videoRepository;

		public VideoController(IVideoRepository videoRepository)
		{
			_videoRepository = videoRepository;
		}

		// GET api/video
		public IEnumerable<Video> Get()
		{
			return _videoRepository.GetAll();
		}

		// GET api/video/5
		public Video Get(int id)
		{
			return _videoRepository.GetById(id);
		}

		// POST api/video
		public void Post(Video video)
		{
			_videoRepository.Add(video);
		}

		// PUT api/video/5
		public void Put(Video video)
		{
			_videoRepository.Update(video);
		}

		// DELETE api/video/5
		public void Delete(int id)
		{
			_videoRepository.Delete(id);
		}
	}
}
