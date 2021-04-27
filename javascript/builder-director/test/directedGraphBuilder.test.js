import { directedGraphBuilder } from '../src/directedGraphBuilder';

describe('directed graph builder', () => {
  it('empty graph', () => {
    // given
    const builder = directedGraphBuilder();

    // when
    const graph = builder.build();

    // then
    expect(graph).toMatchObject(
      {}
    );
  });

  it('should add vertices and edges', () => {
    // given
    const builder = directedGraphBuilder();

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
});
