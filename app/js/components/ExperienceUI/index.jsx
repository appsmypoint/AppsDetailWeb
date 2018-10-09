import React from "react";

import PropTypes from "prop-types";

class ExperienceUI extends React.Component {

    render() {
        return (
            
                <div className="col-md-4">
                    <div className="card card-blog">
                        <div className="card-header card-header-image">
                            <a href={this.props.action} target="_blank">
                                <img src={this.props.image} alt=""/>
                            </a>
                        </div>
                        <div className="card-body">
                            <h6 className="card-category text-rose">{this.props.tag}</h6>
                            <h4 className="card-title">
                                <a href={this.props.action} target="_blank">{this.props.title}</a>
                            </h4>
                            <p className="card-description">
                                {this.props.summary}
                            </p>
                        </div>
                    </div>
                </div>

            
        );
    }

}
export default ExperienceUI

ExperienceUI.propTypes = {
    action: PropTypes.string
    ,title: PropTypes.string
    ,tag: PropTypes.string
    ,image: PropTypes.string
    ,summary: PropTypes.string
};