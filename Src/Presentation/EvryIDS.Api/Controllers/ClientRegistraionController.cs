using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EvryIDS.Api.Controllers
{
   
    public class ClientRegistraionController : BaseController
    {
        [HttpGet]
        public IActionResult ClientRegistraion()
        {
            return Ok("");
        }
    }
}
