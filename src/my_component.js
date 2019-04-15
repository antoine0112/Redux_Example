import React, { Component } from 'react';
import { connect } from 'react-redux';
import {update, deleteMsg} from './actions/my_action'

class MyComponent extends Component {
    render() {
        return (
            <div>
                <p>{this.props.infos.msg}</p>
                <p>{this.props.infos.user}</p>
                <button
                onClick={() => {
                    update("Hello World !", "A new challenger", this.props.dispatch)
                }}
                >Post</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        infos: state.reducer
    }
}

export default connect(mapStateToProps)(MyComponent)