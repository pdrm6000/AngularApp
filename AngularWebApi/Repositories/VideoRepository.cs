using System;
using System.Collections.Generic;
using System.Linq;
using AngularWebApi.Domain;

namespace AngularWebApi.Repositories
{
	public class VideoRepository : IVideoRepository
	{
		public IEnumerable<Video> GetAll()
		{
			return VideoContainer.VideoList;
		}

		public Video GetById(int videoId)
		{
			return VideoContainer.VideoList.FirstOrDefault(v => v.id == videoId);
		}

		public void Add(Video video)
		{
			video.id = VideoContainer.VideoList.Max(v => v.id) + 1;
			VideoContainer.VideoList.Add(video);
		}

		public int Update(Video video)
		{
			var videoToUpdate = VideoContainer.VideoList.FirstOrDefault(v => v.id == video.id);
			if (videoToUpdate == null) return 0;
			videoToUpdate.author = video.author;
			videoToUpdate.creationDate = video.creationDate;
			videoToUpdate.name = video.name;
			videoToUpdate.youtubeId = video.youtubeId;
			return 1;
		}

		public int Delete(int id)
		{
			return VideoContainer.VideoList.RemoveAll(v => v.id == id);
		}

		private static class VideoContainer
		{
			private static List<Video> _videoList = new List<Video>
					       {
						       new Video
						       {
							       id = 1,
							       youtubeId = "jsM2E1BaBQc",
							       name = "The black keys",
							       creationDate = DateTime.Now,
							       author = "the band"
						       },
						       new Video
						       {
							       id = 2,
							       youtubeId = "mIQToVqDMb8",
							       name = "Gan ga style",
							       creationDate = DateTime.Now,
							       author = "japonese people"
						       },
						       new Video
						       {
							       id = 3,
							       youtubeId = "prwhAsWo7gg",
							       name = "No sense video",
							       creationDate = DateTime.Now,
							       author = "Anybody"
						       },
						       new Video
						       {
							       id = 4,
							       youtubeId = "UOQRgs3jIS4",
							       name = "Kitty´s videos",
							       creationDate = DateTime.Now,
							       author = "A girl"
						       },
						       new Video
						       {
							       id = 5,
							       youtubeId = "8F4R590qxGE",
							       name = "Some badass concert",
							       creationDate = DateTime.Now,
							       author = "Rockers"
						       },
						       new Video
						       {
							       id = 6,
							       youtubeId = "OT9HsNszYCI",
							       name = "A full movie",
							       creationDate = DateTime.Now,
							       author = "the pirate bay"
						       },
					       };

			public static List<Video> VideoList
			{
				get
				{
					return _videoList;
				}
			}

		}
	}
}