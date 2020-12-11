using EvryIDS.Application.Interfaces;
using EvryIDS.Domain.Models;
using EvryIDS.Persistence.DBContext;

namespace EvryIDS.Application.Repositories
{
    public class UserRepository : IUser
    {
        UserDBContext _iClientDBContext;
        public User GetUser()
        {
            _iClientDBContext = new UserDBContext();
            return _iClientDBContext.GetUser();
        }
    }
}