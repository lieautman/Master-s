using Microsoft.AspNetCore.Mvc;
using Server_v1.ReadObjects;

namespace Server_v1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ServerSideRequestForgeryController : ControllerBase
    {
        [HttpGet("Level1/{fileName}")]
        public IActionResult Level1(string fileName)
        {
            try
            {
                var path = "./textFiles/" + fileName + ".txt";

                StreamReader sr = new StreamReader(path);
                string? fileContent = sr.ReadLine();
                sr.Close();

                if (fileContent == null)
                {
                    return Ok(new { fileContent = "" }); ;
                }

                return Ok(new { fileContent = fileContent });
            }
            catch (Exception ex)
            {
                return Ok(new { fileContent = "" }); ;
            }
        }

        [HttpGet("Level2/{fileName}")]
        public IActionResult Level2(string fileName)
        {
            try
            {
                string fileNameLocal="";

                switch (fileName)
                {
                    case ("text1"):
                        {
                            fileNameLocal = fileName;
                            break;
                        }
                    default:
                        {
                            break;
                        }
                }

                var path = "./textFiles/" + fileNameLocal + ".txt";

                StreamReader sr = new StreamReader(path);
                string? fileContent = sr.ReadLine();
                sr.Close();

                if (fileContent == null)
                {
                    return Ok(new { fileContent = "" }); ;
                }

                return Ok(new { fileContent = fileContent });
            }
            catch (Exception ex)
            {
                return Ok(new { fileContent = "" }); ;
            }
        }
    }
}
