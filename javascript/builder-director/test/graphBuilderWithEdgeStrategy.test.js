import {
  graphBuilderWithEdgeStrategy,
  addDirectedEdgeStrategy,
  addUndirectedEdgeStrategy,
} from '../src/graphBuilderWithEdgeStrategy';

describe('graph builder', () => {
  it('should add one directed edge', () => {
    // given
    const builder = graphBuilderWithEdgeStrategy(addDirectedEdgeStrategy);

    // when
    const graph = builder
      .addVertex(1)
      .addVertex(2)
      .addEdge(1, 2)
      .addVertex(3)
      .addEdge(1, 3)
      .addEdge(2, 3)
      .build();

    // then
    expect(graph).toMatchObject(
      {
        1: [2, 3],
        2: [3],
        3: [],
      }
    );
  });

  it('should add one undirected edge', () => {
    // given
    const builder = graphBuilderWithEdgeStrategy(addUndirectedEdgeStrategy);

    // when
    const graph = builder
      .addVertex(1)
      .addVertex(2)
      .addEdge(1, 2)
      .addVertex(3)
      .addEdge(1, 3)
      .addEdge(2, 3)
      .build();

    // then
    expect(graph).toMatchObject(
      {
        1: [2, 3],
        2: [1, 3],
        3: [1, 2],
      }
    );
  });
});
