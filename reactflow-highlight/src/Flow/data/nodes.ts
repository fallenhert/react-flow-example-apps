/*
 * @Author: diaosuyang diaosuyang@meituan.com
 * @Date: 2025-02-21 16:10:33
 * @LastEditors: diaosuyang diaosuyang@meituan.com
 * @LastEditTime: 2025-03-04 14:33:22
 * @FilePath: /react-test-demo/reactflow-highlight-demo/src/Flow/data/nodes.ts
 * @Description:
 */
import { Node } from "reactflow";
import BaseNode from "../nodes/BaseNode";
import HighlightNode from "../nodes/HighlightNode";

export const nodeTypes = {
  base: BaseNode,
  highlight: HighlightNode,
};

// 生成随机项目数据
const generateRandomItems = (min = 2, max = 5) => {
  const count = Math.floor(Math.random() * (max - min + 1)) + min;
  const items = [];
  for (let i = 0; i < count; i++) {
    items.push({
      title: `字段${i + 1}`,
      name: `值${i + 1}-${Math.random().toString(36).substring(7)}`,
    });
  }
  return items;
};

// 生成指定数量的节点
const generateNodes = (level: number, count: number, prefix = ""): Node[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: `${level}${prefix}${i + 1}`,
    type: "base",
    position: { x: 0, y: 0 },
    data: {
      label: `L${level}-N${i + 1}`,
      items: generateRandomItems(),
    },
  }));
};

// 生成11个层级的节点
export const initialNodes: Node[] = [
  ...generateNodes(1, 5, "b"), // 第1层 5个节点
  ...generateNodes(2, 5, "b"), // 第2层 5个节点
  ...generateNodes(3, 5, "b"), // 第3层 5个节点
  ...generateNodes(4, 5, "b"), // 第4层 5个节点
  ...generateNodes(5, 5, "b"), // 第5层 5个节点
  ...generateNodes(6, 100, "b"), // 第6层 100个节点，包括高亮节点
  {
    id: "6a", // 高亮节点
    type: "highlight",
    position: { x: 0, y: 0 }, // 位置可以根据需要调整
    data: {
      label: "高亮节点",
      items: generateRandomItems(4, 6),
    },
  },
  ...generateNodes(7, 5, "b"), // 第7层 5个节点
  ...generateNodes(8, 5, "b"), // 第8层 5个节点
  ...generateNodes(9, 5, "b"), // 第9层 5个节点
  ...generateNodes(10, 5, "b"), // 第10层 5个节点
  ...generateNodes(11, 5, "b"), // 第11层 5个节点
];
