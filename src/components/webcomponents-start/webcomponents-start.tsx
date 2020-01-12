import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "stencil-webcomponents-start",
  styleUrl: "webcomponents-start.css",
  shadow: true
})
export class WebcomponentsStart {
  @Prop() dataRaw: string;

  render() {
    return (
      <Host>
        <div>{this.dataRaw}</div>
      </Host>
    );
  }
}
