import { ReactFlowProvider } from "@xyflow/react";
import Flow from "../Flow";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">React Flow - CRA Example</header>
      <ReactFlowProvider>
        <Flow />
      </ReactFlowProvider>
    </div>
  );
}

export default App;
