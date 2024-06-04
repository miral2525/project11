//using System;

//public class Class1
//{
//	public Class1()
//	{
//	}
//}
// Data/ApplicationDbContext.cs
using System.Data.Entity;
using YourNamespace.Models;

namespace YourNamespace.Data
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Contact> Contacts { get; set; }
    }
}
