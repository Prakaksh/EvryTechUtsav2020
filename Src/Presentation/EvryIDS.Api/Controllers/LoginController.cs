using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EvryIDS.Api.Controllers
{
    public class LoginController : BaseController
    {
        [HttpGet]
        [Route("Auth")]
        public IEnumerable<string> Auth()
        {
            return new string[] { "success" };

    }
    }
}
