import { Node, Edge } from "reactflow";

/*
 * @Author: diaosuyang diaosuyang@meituan.com
 * @Date: 2025-03-04 15:06:31
 * @LastEditors: diaosuyang diaosuyang@meituan.com
 * @LastEditTime: 2025-03-04 15:30:34
 * @FilePath: /react-test-demo/reactflow-highlight-demo/src/Flow/utils/index.ts
 * @Description:
 */
export const getLayoutedElements = (nodes: Node[], edges: Edge[]) => {
  const layoutedNodes = nodes.map((node) => {
    const id = node.id;
    if (id.includes("a")) {
      const [rank] = id.split("a");
      return {
        ...node,
        height: 200,
        width: 100,
        draggable: false,
        position: { x: parseInt(rank) * 300, y: -50 },
      };
    }
    const [rank, index] = id.split("b");
    return {
      ...node,
      draggable: false,
      position: {
        x: parseInt(rank) * 300,
        y: parseInt(index) * 200,
      },
    };
  });

  return { nodes: layoutedNodes, edges };
};

// Dagre 图布局函数
// const getLayoutedElements = (
//   nodes: Node[],
//   edges: Edge[],
//   direction = "LR"
// ) => {
//   const dagreGraph = new dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));

//   dagreGraph.setGraph({
//     rankdir: direction,
//     nodesep: 40, // 增加同级节点间距
//     ranksep: 160, // 增加层级间距
//     align: "UL", // 上对齐
//     ranker: "tight-tree", // 使用 tight-tree 算法获得更好的树形布局
//   });

//   // 根据节点内容调整节点大小
//   nodes.forEach((node) => {
//     const height = 40 + (node.data.items?.length || 0) * 20; // 根据items数量调整高度
//     dagreGraph.setNode(node.id, { width: 200, height });
//   });

//   edges.forEach((edge) => {
//     dagreGraph.setEdge(edge.source, edge.target);
//   });

//   dagre.layout(dagreGraph);

//   const layoutedNodes = nodes.map((node) => {
//     const nodeWithPosition = dagreGraph.node(node.id);
//     return {
//       ...node,
//       draggable: false,
//       position: {
//         x: nodeWithPosition.x - nodeWithPosition.width / 2,
//         y: nodeWithPosition.y - nodeWithPosition.height / 2,
//       },
//     };
//   });

//   return { nodes: layoutedNodes, edges };
// };

// 添加 proOptions 配置
