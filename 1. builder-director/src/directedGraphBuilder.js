export const directedGraphBuilder = () => {
  const graph = {};

  return {
    addVertex: function addVertex(vertex) {
      graph[vertex] = [];
      return this;
    },
    addEdge: function addEdge(from, to) {
      graph[from].push(to);
      return this;
    },
    build: () => graph,
  };
};
