using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace Server_v1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MemoryLeakController : ControllerBase
    {
        [HttpGet("Level1")]
        public IActionResult Level1()
        {
            var path = AppDomain.CurrentDomain.BaseDirectory;
            Process P = System.Diagnostics.Process.Start(path + "../../../../x64/Debug/MemoryLeakLevel1.exe");
            P.WaitForExit();
            int result = P.ExitCode;
            return Ok(new { value = result });
        }

        [HttpGet("Level2")]
        public IActionResult Level2()
        {
            var path = AppDomain.CurrentDomain.BaseDirectory;
            Process P = System.Diagnostics.Process.Start(path + "../../../../x64/Debug/MemoryLeakLevel2.exe");
            P.WaitForExit();
            int result = P.ExitCode;
            return Ok(new { value = result });
        }
    }
}
