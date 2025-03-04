/*
 * @Author: diaosuyang diaosuyang@meituan.com
 * @Date: 2025-02-14 14:23:33
 * @LastEditors: diaosuyang diaosuyang@meituan.com
 * @LastEditTime: 2025-02-14 14:34:32
 * @FilePath: /react-test-demo/reactflow-highlight-demo/src/App.tsx
 * @Description:
 */
import React from "react";
import { ReactFlowProvider } from "reactflow";
import Flow from "./Flow";

function App() {
  return (
    <div className="App">
      <ReactFlowProvider>
        <Flow />
      </ReactFlowProvider>
    </div>
  );
}

export default App;
