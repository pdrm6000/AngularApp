﻿using System;
using System.Collections.Generic;
using Microsoft.Practices.Unity;

namespace AngularWebApi.IoC
{
	public class UnityResolver : System.Web.Http.Dependencies.IDependencyResolver
	{
		protected IUnityContainer container;

		public UnityResolver(IUnityContainer container)
		{
			if (container == null)
			{
				throw new ArgumentNullException("container");
			}
			this.container = container;
		}

		public object GetService(Type serviceType)
		{
			try
			{
				return container.Resolve(serviceType);
			}
			catch (ResolutionFailedException)
			{
				return null;
			}
		}

		public IEnumerable<object> GetServices(Type serviceType)
		{
			try
			{
				return container.ResolveAll(serviceType);
			}
			catch (ResolutionFailedException)
			{
				return new List<object>();
			}
		}

		public System.Web.Http.Dependencies.IDependencyScope BeginScope()
		{
			var child = container.CreateChildContainer();
			return new UnityResolver(child);
		}

		public void Dispose()
		{
			container.Dispose();
		}
	}
}