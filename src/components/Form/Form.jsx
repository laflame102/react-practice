import { Component } from "react";

export class Form extends Component {
  state = {
    name: "",
  };

  handleChange = (evt) => {
    this.setState({ name: evt.target.value });
  };

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.name !== prevState.name) {
      localStorage.setItem("name", JSON.stringify(this.state.name));
    }
    // console.log("componentDidUpdate");
  }
  render() {
    const { name } = this.state;
    console.log("render");
    return (
      <div>
        <h1>HELLO WORLD</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
          excepturi.
        </p>
        <form>
          <label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
        </form>
      </div>
    );
  }
}
