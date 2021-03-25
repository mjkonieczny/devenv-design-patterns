import { director as createDirector } from '../src/director';

describe('director', () => {
  it('should add one directed edge', () => {
    // given
    const director = createDirector('directed');

    // when
    const graph = director.buildOneEdgeGraph();

    // then
    expect(graph).toMatchObject({
      1: [2],
      2: [],
    });
  });

  it('should add one undirected edge', () => {
    // given
    const director = createDirector('undirected');

    // when
    const graph = director.buildOneEdgeGraph();

    // then
    expect(graph).toMatchObject({
      1: [2],
      2: [1],
    });
  });
});
