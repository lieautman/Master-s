import { useState } from 'react';
import { ServerSideRequestForgeryLevel1 } from '../../../Requests';

function InsecureRequest() {
    const [data, setData] = useState()
    const [fileName, setFileName] = useState("text1")

    return (
        <>
            <p>{`To fix the problem, a check on the imput can be used.`}</p>
            <input type="text" defaultValue={"text1"} onChange={(event) => setFileName(event.target.value)} />
            <input type="button" value="Get resource" onClick={() => { ServerSideRequestForgeryLevel1(setData, fileName) }} />

            <p>{`Data in file is: ` + data}</p>

            <p>{`Backend code: ServerSideRequestForgeryController.cs -> Level1`}</p>
            <pre>
                {` try
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
 }`}
            </pre><br />
        </>
    );
}

export default InsecureRequest;
