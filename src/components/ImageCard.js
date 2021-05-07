import React from 'react'

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.imageRef = React.createRef();
    }



    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        console.log(this.imageRef.current.clientHeight);
    };

    render() {
        const { description, urls } = this.props.image;
        return (
            <div>
                <img alt={description}
                    src={urls.regular}
                    ref={this.imageRef}
                />
            </div>
        )
    }
}
export default ImageCard