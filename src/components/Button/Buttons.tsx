import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "mika-button",
  styleUrl: "./Button.css",
  shadow: true,
})
export class Button {
  /**
   * button variant
   * @default primary
   * */
  @Prop() variant?: "primary" | "secondary" = "primary";
  /**
   * button size
   * @default m
   * */
  @Prop() size?: "xs" | "s" | "m" | "l" = "m";
  /**
   * if `true`, the button is disabled
   * @default false
   * */
  @Prop() isDisabled?: boolean = false;

  private handleClick = (): void => {
    console.log("mika gav gav");
  }

  render() {
    return (
      <button
        class="mika-button"
        //ref={el => (this.focusableElement = el)}
        disabled={this.isDisabled}
        onClick={this.handleClick}
      >
        <slot />
      </button>
    );
  }
}
