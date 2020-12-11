
using Microsoft.AspNetCore.Mvc;

using EvryIDS.Application.Interfaces;

namespace EvryIDS.Api.Controllers

{
    public class UserController : BaseController
    {
         private readonly IUser _iUser;
        public UserController(IUser iuser)=>_iUser = iuser;
        
        [HttpGet]
        public ActionResult GetUser() => Ok( _iUser.GetUser());
    }
}
