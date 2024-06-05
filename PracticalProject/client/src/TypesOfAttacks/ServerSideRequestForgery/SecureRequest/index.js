import { useState } from 'react';
import { ServerSideRequestForgeryLevel2 } from '../../../Requests';

function SecureRequest() {
    const [data, setData] = useState()
    const [fileName, setFileName] = useState("text1")

    return (
        <>
             <p>{`To fix the problem, a check on the imput can be used.`}</p>
            <input type="text" defaultValue={"text1"} onChange={(event) => setFileName(event.target.value)} />
            <input type="button" value="Get resource" onClick={() => { ServerSideRequestForgeryLevel2(setData, fileName) }} />

            <p>{`Data in file is: ` + data}</p>

            <p>{`Backend code: ServerSideRequestForgeryController.cs -> Level2`}</p>
            <pre>
                {` try
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
}`}
            </pre><br />
        </>
    );
}

export default SecureRequest;
