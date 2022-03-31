import { Component } from "react";

class Carousel extends Component{
    constructor(){
        super();
        this.state = {
            active: 0
        };
    }

    static defaultProps = {
        images: ["http://pets-images.dev-apis.com/pets/none.jpg"]
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