import { MemoryLeakLevel1 } from '../../../Requests/index';

function InsecureInputLevel1() {
  return (
    <>
      <p>
        {`Underneath, there is a button that simulates a large number of requests to the server, instantiatin a large number of objects in heap that do not get deallocated, leading to memory leak problems.`}
      </p>
      <form>
        <input type="button" value="Send request" onClick={() => { MemoryLeakLevel1() }} />
      </form>
      <pre>{`for (int i = 0; i < 2147483646; i++) {
	int* ptr = (int*)malloc(sizeof(int));
}
printf("Finished process!");
return 1;`}</pre><br />
      <p>
        {`The server machine memory after request:`}
      </p>
      <img src="MemoryLeakLevel1SystemMemoryUseage.png"></img>
    </>
  );
}

export default InsecureInputLevel1;
