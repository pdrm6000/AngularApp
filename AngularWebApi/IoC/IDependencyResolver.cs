using System;

namespace AngularWebApi.IoC
{
	public interface IDependencyResolver : IDependencyScope, IDisposable
	{
		IDependencyScope BeginScope();
	}
}
