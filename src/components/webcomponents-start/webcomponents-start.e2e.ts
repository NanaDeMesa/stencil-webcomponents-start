import { newE2EPage } from '@stencil/core/testing';

describe('stencil-webcomponents-start', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stencil-webcomponents-start></stencil-webcomponents-start>');

    const element = await page.find('stencil-webcomponents-start');
    expect(element).toHaveClass('hydrated');
  });
});
