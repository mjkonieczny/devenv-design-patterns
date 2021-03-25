import { directedGraphBuilder } from './directedGraphBuilder';
import { undirectedGraphBuilder } from './undirectedGraphBuilder';

export const director = (type) => ({
  buildOneEdgeGraph: () => {
    let builder;

    if (type === 'directed') {
      builder = directedGraphBuilder();
    } else {
      builder = undirectedGraphBuilder();
    }

    return builder
      .addVertex(1)
      .addVertex(2)
      .addEdge(1, 2)
      .build();
  },
});
