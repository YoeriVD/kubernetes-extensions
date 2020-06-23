using Microsoft.AspNetCore.Hosting.Server.Features;
using Microsoft.AspNetCore.Mvc;

namespace main_menu_item.Controllers
{
    [ApiController]
    [Route("api/main-menu-item")]
    public class OnyxMetaDataController : Controller
    {
        [HttpGet("ready")]
        public IActionResult Ready()
        {
            return Ok("main menu item ready!");
        }
        [HttpGet("live")]
        public IActionResult Live()
        {
            return Ok("main menu item  live!");
        }
    }
}