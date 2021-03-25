import { graphBuilder } from '../src/graphBuilder';

describe('graph builder', () => {
  it('should add one directed edge', () => {
    // given
    const builder = graphBuilder('directed');

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
    const builder = graphBuilder('undirected');

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
