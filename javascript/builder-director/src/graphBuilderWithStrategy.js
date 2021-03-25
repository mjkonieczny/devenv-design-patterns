export const graphBuilderWithStrategy = (addEdgeStrategy) => {
  const graph = {};

  return {
    addVertex: function addVertex(vertex) {
      graph[vertex] = [];
      return this;
    },
    addEdge: function addEdge(from, to) {
      addEdgeStrategy(graph, from, to);

      return this;
    },
    build: () => graph,
  };
};

export const addDirectedEdgeStrategy = (graph, from, to) => {
  graph[from].push(to);
};

export const addUndirectedEdgeStrategy = (graph, from, to) => {
  graph[from].push(to);
  graph[to].push(from);
};
