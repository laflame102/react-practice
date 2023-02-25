import { Component } from "react";

const LS_KEY = "current_index_item";

export class Reader extends Component {
  state = {
    publicationIndex: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.publicationIndex !== this.state.publicationIndex) {
      localStorage.setItem(LS_KEY, this.state.publicationIndex);
    }
  }

  componentDidMount() {
    const savedState = localStorage.getItem(LS_KEY);
    if (savedState) {
      this.setState({ publicationIndex: Number(savedState) });
    }
  }

  changeIndex = (value) => {
    this.setState((prevState) => ({
      publicationIndex: prevState.publicationIndex + value,
    }));
  };

  render() {
    const { publicationIndex } = this.state;
    const { items } = this.props;
    const currentItem = items[publicationIndex];
    return (
      <div>
        <section>
          <button
            type="button"
            disabled={publicationIndex === 0}
            onClick={() => this.changeIndex(-1)}
          >
            Назад
          </button>
          <button
            type="button"
            disabled={publicationIndex + 1 === items.length}
            onClick={() => this.changeIndex(1)}
          >
            Вперед
          </button>
        </section>

        <p>
          {publicationIndex + 1}/{items.length}
        </p>

        <article>
          <h2>{currentItem.title}</h2>
          <p>{currentItem.text}</p>
        </article>
      </div>
    );
  }
}
