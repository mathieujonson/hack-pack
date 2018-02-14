import React, {Component} from 'react'
import {connect} from 'react-redux'

class NotFound extends Component {
    componentWillMount() {
        document.title = 'Hack Pack 404'
    }

    render() {
        return (
            <div className="not-found-container">
                Not found page content.
            </div>
        )
    }
}

export default connect(
)(NotFound)
