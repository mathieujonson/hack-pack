import React, {Component} from 'react'
import {connect} from 'react-redux'

class Home extends Component {
    componentWillMount() {
        document.title = 'Hack Pack Home'
    }

    render() {
        return (
            <div className="home-container">
                Home page content.
            </div>
        )
    }
}

export default connect(
)(Home)
