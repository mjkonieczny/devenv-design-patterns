import { directedGraphBuilder } from '../src/directedGraphBuilder';

describe('directed graph builder', () => {
  it('empty graph', () => {
    // given
    const builder = directedGraphBuilder();

    // when
    const graph = builder.build();

    // then
    expect(graph).toMatchObject({});
  });

  it('should add one vertex', () => {
    // given
    const builder = directedGraphBuilder();

    // when
    const graph = builder
      .addVertex(1)
      .build();

    // then
    expect(graph).toMatchObject({
      1: [],
    });
  });

  it('should add one edge', () => {
    // given
    const builder = directedGraphBuilder();

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
});
