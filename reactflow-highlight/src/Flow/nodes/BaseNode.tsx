/*
 * @Author: diaosuyang diaosuyang@meituan.com
 * @Date: 2025-02-14 14:58:22
 * @LastEditors: diaosuyang diaosuyang@meituan.com
 * @LastEditTime: 2025-03-04 19:32:33
 * @FilePath: /react-test-demo/react-flow-example-apps/reactflow-highlight/src/Flow/nodes/BaseNode.tsx
 * @Description:
 */
import { memo } from "react";
import { Handle, Position, NodeProps } from "reactflow";
import "../styles/BaseNode.css";

interface BaseNodeData {
  label: string;
  items?: Array<{ title: string; name: string }>;
  onClick: (event: React.MouseEvent) => void; // 添加点击事件类型
  isHighlighted: boolean; // 添加高亮状态
}

const BaseNode = ({ data }: NodeProps<BaseNodeData>) => {
  return (
    <div
      className="base-node"
      style={{ backgroundColor: data.isHighlighted ? "red" : "white" }}
      onClick={data.onClick}
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
