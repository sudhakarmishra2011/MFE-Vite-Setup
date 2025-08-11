import { Suspense, lazy } from "react";
const RemoteApp1 = lazy(() => import("app1/App"));
// const RemoteApp2 = lazy(() => import("app2/App"));

function App() {
  let data = {
    label: "Label from Host",
    from: "Host Application",
  };

  const message = (msg) => {
    alert(msg);
  }

  return (
    <>
      <div style={{ border: '2px solid blue', padding: '20px' }}>
        <h1>Host Application</h1>
        <p>This is the host application that loads remote components.</p>
        {/* <Suspense fallback={<div>Loading...</div>}>
          <RemoteApp2 />
          </Suspense> */}
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <RemoteApp1 data={data} message={message} />
      </Suspense>
    </>
  );
}
export default App;
