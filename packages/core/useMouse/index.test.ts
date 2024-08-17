import { describe, expect, it } from 'vitest';
import { useMouse } from './index';

describe('useMouse', () => {
  it('should to be 3', () => {
    const res = useMouse();
    expect(res).toBe(1);
  });
});
