import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'd2-row',
})
export class D2Row {
  @Prop() justifyContent: 'flex-start' | 'flex-end' | 'center' = 'flex-start';

  render() {
    return (
      <div style={{ 'justify-content': this.justifyContent }}>
        <slot />
      </div>
    );
  }
}
