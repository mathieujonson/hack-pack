import React, {Component} from 'react'
import {connect} from 'react-redux'

class About extends Component {
    componentWillMount() {
        document.title = 'Hack Pack About'
    }

    render() {
        return (
            <div className="about-container">
                About page content.
            </div>
        )
    }
}

export default connect(
)(About)
