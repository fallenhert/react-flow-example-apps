/*
 * @Author: diaosuyang diaosuyang@meituan.com
 * @Date: 2025-01-24 17:45:05
 * @LastEditors: diaosuyang diaosuyang@meituan.com
 * @LastEditTime: 2025-02-06 10:20:42
 * @FilePath: /react-test-demo/react-flow-example-apps/reactflow-create-react-app/src/Flow/nodes/PositionLoggerNode.tsx
 * @Description:
 */
import type { Node, NodeProps } from "@xyflow/react";
import { Handle, Position } from "@xyflow/react";

export type PositionLoggerNodeData = {
  label?: string;
  items?: any[];
};

export type PositionLoggerNode = Node<PositionLoggerNodeData>;

export default function PositionLoggerNode({
  positionAbsoluteX,
  positionAbsoluteY,
  data,
}: NodeProps<PositionLoggerNode>) {
  const x = `${Math.round(positionAbsoluteX)}px`;
  const y = `${Math.round(positionAbsoluteY)}px`;

  return (
    // We add this class to use the same styles as React Flow's default nodes.
    <div className="react-flow__node-default" style={{ width: 200 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {data.label && <div>{data.label}</div>}
        <a href="https://www.baidu.com">详情</a>
      </div>

      <div style={{ height: 1, width: "100%", backgroundColor: "gray" }} />
      <div>{`${x} ${y}`}</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        {data.items &&
          data.items.map((item) => <div>{`${item.title}:${item.name}`}</div>)}
      </div>

      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} />
    </div>
  );
}
