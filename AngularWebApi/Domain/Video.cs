using System;

namespace AngularWebApi.Domain
{
	public class Video
	{
		public int  id { get; set; }
		public string youtubeId { get; set; }
		public string name { get; set; }
		public DateTime creationDate { get; set; }
		public string author { get; set; }
	}
}