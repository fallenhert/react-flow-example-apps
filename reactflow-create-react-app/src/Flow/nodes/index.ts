import type { BuiltInNode, Node, NodeTypes } from "@xyflow/react";
import PositionLoggerNode, {
  type PositionLoggerNode as PositionLoggerNodeType,
} from "./PositionLoggerNode";

export const initialNodes = [
  {
    id: "a",
    type: "position-logger",
    data: {
      label: "wire",
      items: [
        { title: "BGBU", name: "骑行-单车" },
        { title: "预算年份", name: "2024" },
        { title: "采购类型", name: "资产-新车" },
        { title: "预算金额", name: "CNY 20,000.00" },
        { title: "已申请金额", name: "CNY 2,000.00" },
      ],
    },
  },
  {
    id: "b",
    type: "position-logger",
    data: {
      label: "drag me!",
      items: [
        { title: "单据编号", name: "INSY241205344137" },
        { title: "单据状态", name: "已完成" },
        { title: "执行人", name: "付睿迪/furuidi" },
        { title: "单据金额（含税）", name: "CNY 2,000.00" },
        { title: "是否占用预算池", name: "是" },
      ],
    },
  },
  {
    id: "c",
    type: "position-logger",
    data: {
      label: "your ideas",
      items: [
        { title: "单据编号", name: "PO50030241204864155" },
        { title: "单据状态", name: "已完成" },
        { title: "执行人", name: "付睿迪/furuidi" },
        { title: "单据金额（含税）", name: "CNY 1,000.00" },
      ],
    },
  },
  {
    id: "d",
    type: "position-logger",
    data: {
      label: "with React Flow",
      items: [
        { title: "单据编号", name: "INSY241205344137" },
        { title: "单据状态", name: "待入库" },
        { title: "执行人", name: "付睿迪/furuidi" },
      ],
    },
  },
  {
    id: "e",
    type: "position-logger",
    data: {
      label: "Test Node 1",
      items: [
        { title: "单据编号", name: "INSY241205344137" },
        { title: "单据状态", name: "待入库" },
        { title: "执行人", name: "付睿迪/furuidi" },
      ],
    },
  },
  {
    id: "f",
    type: "position-logger",
    data: {
      label: "Test Node 2",
      items: [
        { title: "单据编号", name: "JS1001230906105105" },
        { title: "单据状态", name: "审批中" },
        { title: "执行人", name: "张三/zhangsan03" },
      ],
    },
  },
  {
    id: "g",
    type: "position-logger",
    data: {
      label: "Test Node 3",
      items: [
        { title: "单据编号", name: "JS1001230906105106" },
        { title: "单据状态", name: "审批中" },
        { title: "执行人", name: "张三/zhangsan03" },
      ],
    },
  },
] satisfies Pick<Node, "id" | "type" | "data">[];

export const nodeTypes = {
  "position-logger": PositionLoggerNode,
  // Add any of your custom nodes here!
} satisfies NodeTypes;

// Append the types of you custom edges to the BuiltInNode type
export type CustomNodeType = BuiltInNode | PositionLoggerNodeType;
