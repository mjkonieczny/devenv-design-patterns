import {
  graphBuilderWithStrategy,
  addDirectedEdgeStrategy,
  addUndirectedEdgeStrategy,
} from '../src/graphBuilderWithStrategy';

describe('graph builder', () => {
  it('should add one directed edge', () => {
    // given
    const builder = graphBuilderWithStrategy(addDirectedEdgeStrategy);

    // when
    const graph = builder
      .addVertex(1)
      .addVertex(2)
      .addEdge(1, 2)
      .build();

    // then
    expect(graph).toMatchObject({
      1: [2],
      2: [],
    });
  });

  it('should add one undirected edge', () => {
    // given
    const builder = graphBuilderWithStrategy(addUndirectedEdgeStrategy);

    // when
    const graph = builder
      .addVertex(1)
      .addVertex(2)
      .addEdge(1, 2)
      .build();

    // then
    expect(graph).toMatchObject({
      1: [2],
      2: [1],
    });
  });
});
