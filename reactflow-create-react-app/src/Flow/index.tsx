import Dagre from "@dagrejs/dagre";
import { useCallback, useEffect } from "react";
import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  addEdge,
  useNodesState,
  useEdgesState,
  MarkerType,
  type OnConnect,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import { initialNodes, nodeTypes, type CustomNodeType } from "./nodes";
import { initialEdges, edgeTypes, type CustomEdgeType } from "./edges";

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState<CustomNodeType>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<CustomEdgeType>([]);
  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges]
  );

  const getLayoutElements = (nodes: any, edges: any, options: any) => {
    const g = new Dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));
    // 设置节点间的最小间距
    g.setGraph({ rankdir: options.direction, nodesep: 100, ranksep: 150 });

    edges.forEach((edge: any) => g.setEdge(edge.source, edge.target));
    nodes.forEach((node: any) => {
      // 使用一个最小尺寸，确保即使没有 measured 属性也有一定的大小
      const width = Math.max(node.measured?.width ?? 200, 200);
      const height = Math.max(node.measured?.height ?? 50, 50);
      g.setNode(node.id, { width, height });
    });

    Dagre.layout(g);

    return {
      nodes: nodes.map((node: any) => {
        const { x, y } = g.node(node.id);
        // 使用 Dagre 计算的 x, y 作为左上角坐标，不需要额外调整
        return { ...node, position: { x, y } };
      }),
      edges: edges.map((edge: any) => {
        return {
          ...edge,
          type: "smoothstep",
          deletable: false,
          markerEnd: {
            type: MarkerType.ArrowClosed,
          },
        };
      }),
    };
  };

  useEffect(() => {
    const layouted = getLayoutElements(initialNodes, initialEdges, {
      direction: "LR",
    });
    setNodes([...layouted.nodes]);
    setEdges([...layouted.edges]);
  }, []);

  return (
    <ReactFlow<CustomNodeType, CustomEdgeType>
      nodes={nodes}
      nodeTypes={nodeTypes}
      nodesConnectable={false}
      nodesDraggable={false}
      onNodesChange={onNodesChange}
      edges={edges}
      edgeTypes={edgeTypes}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
    >
      <Background />
      <MiniMap />
      <Controls />
    </ReactFlow>
  );
}
