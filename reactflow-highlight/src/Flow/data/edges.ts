/*
 * @Author: diaosuyang diaosuyang@meituan.com
 * @Date: 2025-02-21 16:10:56
 * @LastEditors: diaosuyang diaosuyang@meituan.com
 * @LastEditTime: 2025-03-04 15:18:20
 * @FilePath: /react-test-demo/reactflow-highlight-demo/src/Flow/data/edges.ts
 * @Description:
 */
import { Edge, MarkerType } from "reactflow";

// 抽离边的默认样式配置
export const defaultEdgeOptions = {
  type: "smoothstep",
  style: {
    strokeWidth: 2,
    stroke: "#b1b1b7",
  },
  markerEnd: {
    type: MarkerType.ArrowClosed,
    width: 20,
    height: 20,
    color: "#b1b1b7",
  },
};

// 创建边的工具函数
export const createEdge = (source: string, target: string): Edge => ({
  id: `e${source}-${target}`,
  source,
  target,
  ...defaultEdgeOptions,
});

// 生成主链路边
const mainPathEdges = [
  createEdge("1a", "2a"),
  createEdge("2a", "3a"),
  createEdge("3a", "4a"),
  createEdge("4a", "5a"),
  createEdge("5a", "6a"), // 连接到高亮节点
  createEdge("6a", "7a"),
  createEdge("7a", "8a"),
  createEdge("8a", "9a"),
  createEdge("9a", "10a"),
  createEdge("10a", "11a"),
];

// 生成层间连接
const generateInterLevelEdges = (levels: number): Edge[] => {
  const edges: Edge[] = [];
  const edgeSet = new Set<string>(); // 用于跟踪已添加的边

  for (let level = 1; level < levels; level++) {
    const currentNodeCount = level === 5 ? 5 : 5; // 第5层有5个节点，其他层有5个节点
    const nextNodeCount = level + 1 === 6 ? 100 : 5; // 确保下一层的节点数量

    // 为每个下一层的节点创建至少一条与上一层的连接
    for (let j = 1; j <= nextNodeCount; j++) {
      const previousNodeIndex =
        Math.floor(Math.random() * currentNodeCount) + 1; // 随机选择上一层的节点
      const edgeId = `${level}b${previousNodeIndex}-${level + 1}b${j}`; // 创建边的唯一标识

      if (!edgeSet.has(edgeId)) {
        edges.push(
          createEdge(`${level}b${previousNodeIndex}`, `${level + 1}b${j}`)
        );
        edgeSet.add(edgeId); // 添加到集合中
      }
    }

    // 为每个当前层的节点创建至少一条与下一层的连接
    for (let i = 1; i <= currentNodeCount; i++) {
      const nextNodeIndex = Math.floor(Math.random() * nextNodeCount) + 1; // 随机选择下一层的节点
      const edgeId = `${level}b${i}-${level + 1}b${nextNodeIndex}`; // 创建边的唯一标识

      if (!edgeSet.has(edgeId)) {
        edges.push(
          createEdge(`${level}b${i}`, `${level + 1}b${nextNodeIndex}`)
        );
        edgeSet.add(edgeId); // 添加到集合中
      }
    }
  }
  return edges;
};

// 生成高亮节点与普通节点的前后连接
const generateHighlightEdges = (): Edge[] => {
  const edges: Edge[] = [];
  // 高亮节点前后的连接
  edges.push(createEdge("5b1", "6a")); // 连接第5层的第一个节点到高亮节点
  edges.push(createEdge("6a", "7b1")); // 连接高亮节点到第6层的第一个节点
  return edges;
};

// 生成所有层的边
const intraLevelEdges = generateInterLevelEdges(11); // 生成11个层级的边
const highlightEdges = generateHighlightEdges(); // 生成高亮节点的连接

export const initialEdges: Edge[] = [
  ...mainPathEdges,
  ...intraLevelEdges, // 添加层间的连线
  ...highlightEdges, // 添加高亮节点的连接
];
