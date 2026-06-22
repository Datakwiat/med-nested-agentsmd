import { describe, expect, it } from 'vitest';

import { App } from './App';

describe('App', () => {
  it('renders the updated health message', () => {
    const element = App();

    expect(element.type).toBe('main');
    expect(element.props.children).toBe('Frontend App: healthy v3');
  });
});
