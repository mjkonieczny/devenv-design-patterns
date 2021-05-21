import { director as createDirector } from '../src/director';

describe('director', () => {
  it('should add vertices and directed edges', () => {
    // given
    const director = createDirector('directed');

    // when
    const graph = director.buildOneEdgeGraph();

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
    const director = createDirector('undirected');

    // when
    const graph = director.buildOneEdgeGraph();

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
