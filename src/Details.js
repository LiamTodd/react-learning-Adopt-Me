import { Component } from "react/cjs/react.production.min";
import { withRouter } from "react-router-dom";

// class component (old)
class Details extends Component {
  constructor() {
    super();
    this.state = { loading: true };
  }
  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = await res.json();
    this.setState({
      loading: false,

      name: json.pets[0].name,
      animal: json.pets[0].animal,
      breed: json.pets[0].breed,
      description: json.pets[0].description,
      image: json.pets[0].images[0],
    });
  }
  render() {
    if (this.state.loading) {
      return <h2>...loading</h2>;
    }
    return (
      // <div className="image-container">
      <div className="details">
        <img
          className="image-container"
          src={this.state.image}
          alt={this.state.name}
        ></img>
        <div>
          <h1>{this.state.name}</h1>
          <h2>
            {this.state.breed} {this.state.animal}
          </h2>
          <p>{this.state.description}</p>
        </div>
        <div>
          <button>Adopt {this.state.name}</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Details);
