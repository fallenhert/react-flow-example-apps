/*
 * @Author: diaosuyang diaosuyang@meituan.com
 * @Date: 2025-02-14 14:22:52
 * @LastEditors: diaosuyang diaosuyang@meituan.com
 * @LastEditTime: 2025-03-04 16:21:19
 * @FilePath: /react-test-demo/reactflow-highlight-demo/src/Flow/nodes/HighlightNode.tsx
 * @Description:
 */
import React, { memo } from "react";
import { Handle, Position, NodeProps } from "reactflow";
import "../styles/HighlightNode.css";

interface HighlightNodeData {
  label: string;
  items?: Array<{ title: string; name: string }>;
}

const HighlightNode = ({ data }: NodeProps<HighlightNodeData>) => {
  return (
    <div className="highlight-node">
      <Handle type="target" position={Position.Left} />
      <div className="highlight-node-header">{data.label}</div>
      <div className="highlight-node-content">
        {data.items?.map((item, index) => (
          <div key={index} className="highlight-node-item">
            {`${item.title}: ${item.name}`}
          </div>
        ))}
      </div>
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export default memo(HighlightNode);
