import React from "react";

import PropTypes from "prop-types";

class ExperienceImageUI extends React.Component {

    render() {
        return (     
                <div className="col-md-4">
                    <div className="card card-profile">
                        <div className="card-header card-avatar">
                            <a href={this.props.action}>
                                <img className="img" src={this.props.image} />
                            </a>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">{this.props.title}</h4>
                            <h6 className="card-category text-muted">{this.props.tag}</h6>
                            <p className="card-description">
                                {this.props.summary}
                            </p>
                        </div>
                        
                    </div>
                </div>
            
        );
    }

}
export default ExperienceImageUI

ExperienceImageUI.propTypes = {
    action: PropTypes.string
    ,title: PropTypes.string
    ,tag: PropTypes.string
    ,image: PropTypes.string
    ,summary: PropTypes.string
};