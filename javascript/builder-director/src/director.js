import { directedGraphBuilder } from './directedGraphBuilder';
import { undirectedGraphBuilder } from './undirectedGraphBuilder';

export const director = (type) => ({
  buildOneEdgeGraph: () => {
    let builder;

    if (type === 'directed') {
      builder = directedGraphBuilder();
    } else if (type == 'undirected') {
      builder = undirectedGraphBuilder();
    } else {
      return {}
    }

    return builder
      .addVertex(1)
      .addVertex(2)
      .addEdge(1, 2)
      .addVertex(3)
      .addEdge(1, 3)
      .addEdge(2, 3)
      .build();
  },
});
