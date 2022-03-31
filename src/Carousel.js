import { Component } from "react";

class Carousel extends Component{
    constructor(){
        super();
        this.state = {
            active: 0
        };
    }

    // for the case that not images of the pet can be found
    static defaultProps = {
        images: ["http://pets-images.dev-apis.com/pets/none.jpg"]
    }

    // handle what happens when the images are clicked (not buttons, so no inbuilt listeners)
    handleIndexClick = (event) => {
        console.log(event.target.dataset.imageindex)
        this.setState({
            active: event.target.dataset.imageindex
        })
    }

    render () {
        const {active} = this.state // changeable, come from class
        const {images} = this.props // props cannot be changed, come from parent

        return (
            <div className="carousel">
                <img src={images[active]} alt="animal"></img>
                <div className="carousel-smaller">
                    {images.map((photo, index) => (
                        <img
                        key={photo}
                        src={photo}
                        data-imageindex={index}
                        onClick={this.handleIndexClick}
                        className={index=== active ? "active" : ""}
                        alt="animal thumbnail"
                        >
                        </img>
                    ))}
                </div>
            </div>
        )
    }
}

export default Carousel