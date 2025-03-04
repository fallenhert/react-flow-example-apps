import React, {
  useCallback,
  useState,
  useLayoutEffect,
  useEffect,
} from "react";
import ReactFlow, {
  Node,
  Edge,
  Background,
  NodeChange,
  EdgeChange,
  applyNodeChanges,
  applyEdgeChanges,
  useReactFlow,
  Panel,
} from "reactflow";
// import dagre from "dagre";
// import { DagreLayout } from "@antv/layout";
import "reactflow/dist/style.css";
import "./styles/Controls.css";
import "./styles/Handles.css";
import { initialNodes, nodeTypes } from "./data/nodes";
import { initialEdges, defaultEdgeOptions } from "./data/edges";
import { getLayoutedElements } from "./utils";

const proOptions = {
  hideAttribution: true, // 隐藏水印
};

const Flow = () => {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);
  const [initCounter, setInitCounter] = useState(0);
  const { setCenter, zoomIn, zoomOut, fitView } = useReactFlow();

  // 初始化布局
  useLayoutEffect(() => {
    const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
      initialNodes,
      initialEdges
    );
    setNodes(layoutedNodes);
    setEdges(layoutedEdges);
  }, []);

  useEffect(() => {
    // 为什么是2, 初始化布局后执行
    if (initCounter > 2) {
      return;
    }
    if (initCounter === 2) {
      handleHighlight(0.6);
    }
    setInitCounter(initCounter + 1);
  }, [nodes]);

  const onNodesChange = useCallback((changes: NodeChange[]) => {
    setNodes((nds) => applyNodeChanges(changes, nds));
  }, []);

  const onEdgesChange = useCallback((changes: EdgeChange[]) => {
    setEdges((eds) => applyEdgeChanges(changes, eds));
  }, []);

  const handleHighlight = useCallback(
    (zoom: number) => {
      // 查找类型为 'highlight' 的节点
      const highlightNode = nodes.find((node) => node.type === "highlight");

      if (highlightNode) {
        setCenter(
          highlightNode.position.x + highlightNode.width! / 2,
          highlightNode.position.y + highlightNode.height! / 2,
          { duration: 800, zoom }
        );
      }
    },
    [nodes, setCenter]
  );

  const handleZoomIn = () => {
    zoomIn({ duration: 800 });
  };

  const handleZoomOut = () => {
    zoomOut({ duration: 800 });
  };

  const handleReset = () => {
    fitView({ duration: 800 });
  };

  const handleFullScreen = () => {
    const element = document.documentElement;
    if (!document.fullscreenElement) {
      element.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div
      style={{
        height: "80vh",
        width: "100%",
        border: "1px solid #eee",
        borderRadius: "4px",
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        defaultEdgeOptions={defaultEdgeOptions}
        minZoom={0.1}
        maxZoom={4}
        fitView
        proOptions={proOptions}
      >
        <Background />
        <Panel position="bottom-right" className="custom-controls">
          <button
            className="control-button"
            onClick={handleZoomIn}
            title="放大 (20%)"
          >
            +
          </button>
          <button
            className="control-button"
            onClick={handleZoomOut}
            title="缩小 (20%)"
          >
            -
          </button>
          <button
            className="control-button"
            onClick={handleReset}
            title="复位 (重置位置和大小)"
          >
            ⌖
          </button>
          <button
            className="control-button"
            onClick={handleFullScreen}
            title="全屏"
          >
            ⤢
          </button>
          <button
            className="control-button"
            onClick={() => handleHighlight(1.5)}
            title="聚焦"
          >
            ★
          </button>
        </Panel>
      </ReactFlow>
    </div>
  );
};

export default Flow;
