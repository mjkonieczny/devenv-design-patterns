import { graphBuilder } from '../src/graphBuilder';

describe('graph builder', () => {
  it('should add vertices and directed edges', () => {
    // given
    const builder = graphBuilder('directed');

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

  it('should add vertices and undirected edges', () => {
    // given
    const builder = graphBuilder('undirected');

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
