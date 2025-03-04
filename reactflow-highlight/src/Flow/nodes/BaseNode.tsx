/*
 * @Author: diaosuyang diaosuyang@meituan.com
 * @Date: 2025-02-14 14:58:22
 * @LastEditors: diaosuyang diaosuyang@meituan.com
 * @LastEditTime: 2025-03-04 16:31:19
 * @FilePath: /react-test-demo/reactflow-highlight-demo/src/Flow/nodes/BaseNode.tsx
 * @Description:
 */
import { memo } from "react";
import { Handle, Position, NodeProps } from "reactflow";
import "../styles/BaseNode.css";

interface BaseNodeData {
  label: string;
  items?: Array<{ title: string; name: string }>;
  selected?: boolean;
}

const BaseNode = ({ data }: NodeProps<BaseNodeData>) => {
  return (
    <div
      className="base-node"
      style={{ backgroundColor: data.selected ? "red" : "white" }}
    >
      <Handle type="target" position={Position.Left} />
      <div className="base-node-header">{data.label}</div>
      <div className="base-node-content">
        {data.items?.map((item, index) => (
          <div key={index} className="base-node-item">
            {`${item.title}: ${item.name}`}
          </div>
        ))}
      </div>
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export default memo(BaseNode);
