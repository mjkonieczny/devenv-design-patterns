export const undirectedGraphBuilder = () => {
  const graph = {};

  return {
    addVertex: function addVertex(vertex) {
      graph[vertex] = [];
      return this;
    },
    addEdge: function addEdge(from, to) {
      graph[from].push(to);
      graph[to].push(from);
      return this;
    },
    build: () => graph,
  };
};
