import { MemoryLeakLevel1 } from '../../../Requests/index';

function InsecureInputLevel1() {
  return (
    <>
      <p>
        {`Underneath, there is a button that simulates a large number of requests to the server, instantiatin a large number of objects in heap that do not get deallocated, leading to memory leak problems`}
      </p>
      <form>
        <input type="button" value="Send requests" onClick={() => { MemoryLeakLevel1() }} />
      </form>
      
    </>
  );
}

export default InsecureInputLevel1;
