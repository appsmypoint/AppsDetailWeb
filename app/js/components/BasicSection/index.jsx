import React from "react";

import PropTypes from "prop-types";

class BasicSection extends React.Component {

    render() {
        const children = this.props.children;
        return (
            <div className="section">
                <div className="container">
                    <h2 className="section-title">{this.props.title}</h2>
                    <div className="row">
                        {children}
                    </div>
                </div>
            </div>
        );
    }

}
export default BasicSection

BasicSection.propTypes = {
    
    title: PropTypes.string
    ,children: PropTypes.element.isRequired
};


