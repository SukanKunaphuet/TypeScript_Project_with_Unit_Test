import { merge } from './mergeFunction';
import { expect } from 'chai';

describe('merge function', () => {
  it('should merge two sorted arrays', () => {
    const arr1 = [1, 3, 5, 7];
    const arr2 = [2, 4, 6, 8];
    const result = merge(arr1, arr2);
    expect(result).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it('should merge arrays with different lengths', () => {
    const arr1 = [1, 3, 5, 7];
    const arr2 = [2, 4, 6];
    const result = merge(arr1, arr2);
    expect(result).to.deep.equal([1, 2, 3, 4, 5, 6, 7]);
  });

  // Add more test cases as needed
});
