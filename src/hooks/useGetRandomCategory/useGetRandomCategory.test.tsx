import { useGetRandomCategory } from './useGetRandomeCategory';
import { renderHook } from '@testing-library/react-hooks'
import random from 'lodash/random';

jest.mock('lodash/random')


describe('useGetRandomCategory', () => {

  it('themes are only updated when the round is changed', () => {
    // @ts-ignore;
    random.mockReturnValue(0).mockReturnValueOnce(3).mockReturnValueOnce(1)

    const { result, rerender } = renderHook((props) => useGetRandomCategory(props), {
      initialProps: {
        currentRound: 0,
      },
    })
    expect(result.current).toEqual(expect.any(String));

    const prevState = result.current;
    rerender({
      currentRound: 0,
    });
    expect(result.current).toEqual(prevState);

    rerender({
      currentRound: 1,
    });
    expect(result.current).not.toEqual(prevState);

  })

  afterAll(() => {
    jest.clearAllMocks();
  })

})
