import { Edge, type BuiltInEdge, type EdgeTypes } from "@xyflow/react";

import ButtonEdge, { type ButtonEdge as ButtonEdgeType } from "./ButtonEdge";

export const initialEdges = [
  { id: "a->b", source: "a", target: "b" },
  { id: "b->d", source: "b", target: "d" },
  { id: "c->d", source: "c", target: "d" },
  { id: "a->e", source: "a", target: "e" },
  { id: "e->f", source: "e", target: "f" },
  { id: "e->g", source: "e", target: "g" },
] satisfies Edge[];

export const edgeTypes = {
  // Add your custom edge types here!
  "button-edge": ButtonEdge,
} satisfies EdgeTypes;

// Append the types of you custom edges to the BuiltInEdge type
export type CustomEdgeType = BuiltInEdge | ButtonEdgeType;
