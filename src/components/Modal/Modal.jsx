import { Component } from "react";
import { ModalBackdrop, ModalWindow } from "./Modal.styled";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

export class Modal extends Component {
  componentDidMount() {
    console.log("componentDidMount");
    window.addEventListener("keydown", this.handleOnEscape);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    window.removeEventListener("keydown", this.handleOnEscape);
  }

  handleOnEscape = (evt) => {
    if (evt.code === "Escape") {
      this.props.onClose();
    }
  };

  handleBackdrop = (evt) => {
    if (evt.currentTarget === evt.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <ModalBackdrop onClick={this.handleBackdrop}>
        <ModalWindow>{this.props.children}</ModalWindow>
      </ModalBackdrop>,
      modalRoot
    );
  }
}
