import { MemoryLeakLevel2 } from '../../../Requests/index';

function SecureInputLevel2() {
  return (
    <>
      <p>
      {`The objects now get deallocated, thus the server does not crash.`}
      </p>
      <form>
        <input type="button" value="Send" onClick={() => { MemoryLeakLevel2() }} />
      </form>
    </>
  );
}


export default SecureInputLevel2;
