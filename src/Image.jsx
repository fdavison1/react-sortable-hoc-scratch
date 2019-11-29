import React from 'react'

class Image extends React.Component {
    state = {
        style: {height: 175, width: 300, border: '3px solid red', borderStyle: 'hidden'}
    }
    handleMouseOver = () => {
        this.setState({...this.state.style, borderStyle: 'inset'})
    }
    handleMouseOut = () => {
        this.setState({style: {...this.state.style, borderStyle: 'hidden'}})
    }
    render() {
        return (
            <div>
                <img onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}
                src={this.props.image} style={this.state.style} />
            </div>
        )
    }
}

export default Image

