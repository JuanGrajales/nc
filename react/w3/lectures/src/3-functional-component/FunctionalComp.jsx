// How do we create a functional component? rsc (hint: remember rcc)
// How to call props in a functional component? (hint: in class {this.props.propName})

import React from 'react';

const FunctionalComp = (props) => {
    return (
        <div>
            {props.prop1}
        </div>
    );
};

export default FunctionalComp;

import React, { Component } from 'react';

class FunctionalComp extends Component {
    render() {
        return (
            <div>
                {this.props.prop1}
            </div>
        );
    }
}

export default FunctionalComp;