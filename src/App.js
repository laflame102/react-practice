import { Component } from "react";
import "./App.css";
// import { Form } from "./components/Form/Form";
import { Modal } from "./components/Modal/Modal";

class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState((prevState) => ({ showModal: !prevState.showModal }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <div>
        <button type="button" onClick={this.toggleModal}>
          Open
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>HEllo this is inside children</h1>
            <p>
              loremdbneblbnlbnlnblebnlbelnbelnblnb;labtenbatn
              ;tb;nebtn;;bte;tbe;tbe;tbnebntbrtktnkrtkrjtnkrjbtkrn
            </p>
            <button type="button" onClick={this.toggleModal}>
              Close
            </button>
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
