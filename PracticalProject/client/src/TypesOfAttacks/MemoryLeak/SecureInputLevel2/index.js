import { MemoryLeakLevel2 } from '../../../Requests/index';

function SecureInputLevel2() {
  return (
    <>
      <p>
      {`The objects now get deallocated, thus the application does not take too much memory.`}
      </p>
      <form>
        <input type="button" value="Send request" onClick={() => { MemoryLeakLevel2() }} />
      </form>
      <pre>{`	for (int i = 0; i < 2147483646; i++) {
		int* ptr = (int*)malloc(sizeof(int));
		free(ptr);
	}
	printf("Finished process!");
	return 1;`}</pre><br />
    </>
  );
}


export default SecureInputLevel2;
