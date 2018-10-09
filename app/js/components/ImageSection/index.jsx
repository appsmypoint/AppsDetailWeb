import React from "react";

import PropTypes from "prop-types";

import bg7 from '../../../assets/img/salto_tequendamita.jpg';

class ImageSection extends React.Component {

    render() {
        const children = this.props.children;
        return (
            <div className="team-4 section-image" style={{backgroundImage: `url(${bg7})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 ml-auto mr-auto text-center">
                            <h2 className="title">{this.props.title}</h2>
                            <h5 className="description">{this.props.summary}</h5>
                        </div>
                    </div>
                    <div className="row">
                        {children}
                    </div>
                </div>
            </div>
        );
    }

}
export default ImageSection

ImageSection.propTypes = {
    title: PropTypes.string
    ,summary: PropTypes.string
    ,children: PropTypes.element.isRequired
};


