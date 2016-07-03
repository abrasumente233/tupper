import { K2Graph, Graph2K } from '../convert';

export const CHANGE_GRAPH_STATE = 'CHANGE_GRAPH_STATE';

export function changeGraph(graph) {
  return { type: CHANGE_GRAPH_STATE, graph, k: Graph2K(graph) };
}

export function changeK(k) {
  return { type: CHANGE_GRAPH_STATE, k, graph: K2Graph(k) };
}
