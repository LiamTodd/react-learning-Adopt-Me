import { Component } from "react/cjs/react.production.min";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";

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
      animalImages: json.pets[0].images,
    });
  }
  render() {
    if (this.state.loading) {
      return <h2>...loading</h2>;
    }
    return (
      // <div className="image-container">
      <div className="details">
        <Carousel images={this.state.animalImages}></Carousel>
        <div>
          <h1>{this.state.name}</h1>
          <h2>
            {this.state.breed} {this.state.animal}
          </h2>
          <p>{this.state.description}</p>
        </div>
        <div>
          <ThemeContext.Consumer>
            {([themeHook]) => (
              <button style={{ backgroundColor: themeHook }}>
                Adopt {this.state.name}
              </button>
            )}
          </ThemeContext.Consumer>
        </div>
      </div>
    );
  }
}

const DetailsWithRouter = withRouter(Details);
export default function DetailsWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <DetailsWithRouter></DetailsWithRouter>
    </ErrorBoundary>
  );
}
