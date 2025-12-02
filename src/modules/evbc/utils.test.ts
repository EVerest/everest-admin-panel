import { describe, it, expect } from 'vitest';
import { smart_increment_name } from './utils';

describe('smart_increment_name', () => {
  it('should append (1) if name is unique', () => {
    const existing = new Set(['Other']);
    expect(smart_increment_name('Node', existing)).toBe('Node (1)');
  });

  it('should increment counter if name exists', () => {
    const existing = new Set(['Node', 'Node (1)']);
    expect(smart_increment_name('Node', existing)).toBe('Node (2)');
  });

  it('should handle base name with parenthesis', () => {
    const existing = new Set(['Node (A)']);
    expect(smart_increment_name('Node (A)', existing)).toBe('Node (A) (1)');
  });

  it('should increment from existing counter', () => {
    const existing = new Set(['Node (1)', 'Node (2)']);
    expect(smart_increment_name('Node (1)', existing)).toBe('Node (3)');
  });

  it('should fill gaps', () => {
    const existing = new Set(['Node (1)', 'Node (3)']);
    expect(smart_increment_name('Node', existing)).toBe('Node (2)');
  });
});
