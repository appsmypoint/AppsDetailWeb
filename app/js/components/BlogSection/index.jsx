import React from "react";

import PropTypes from "prop-types";

class BlogSection extends React.Component {

    render() {
        const children = this.props.children;
        return (
            <div className="blogs-3">
                <div className="container">
                    <h2 className="title">{this.props.title}</h2>
                    <br />
                    <div className="row">
                        {children}
                    </div>
                </div>
            </div>
        );
    }

}
export default BlogSection

BlogSection.propTypes = {
    
    title: PropTypes.string
    ,children: PropTypes.element.isRequired
};


