using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace Server_v1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BufferOverflowController : ControllerBase
    {
        [HttpGet("Level1/{name}")]
        public IActionResult Level1(string name)
        {
            var path = AppDomain.CurrentDomain.BaseDirectory;
            Process P = System.Diagnostics.Process.Start(path + "../../../../x64/Debug/BufferOverflowLevel1.exe", name);
            P.WaitForExit();
            int result = P.ExitCode;
            return Ok(new { value = result });
        }

        [HttpGet("Level2/{name}")]
        public IActionResult Level2(string name)
        {
            var path = AppDomain.CurrentDomain.BaseDirectory;
            Process P = System.Diagnostics.Process.Start(path + "../../../../x64/Debug/BufferOverflowLevel2.exe", name);
            P.WaitForExit();
            int result = P.ExitCode;
            return Ok(new { value = result });
        }
    }
}
