import React from "react";

import PropTypes from "prop-types";

class ExperienceBlogUI extends React.Component {

    render() {
        return (
            <div className="card card-plain card-blog">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card-header card-header-image">
                            <img className="img img-raised" src={this.props.image}/>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <h6 className="card-category text-info">{this.props.tag}</h6>
                        <h3 className="card-title">
                            <a href={this.props.action}>{this.props.title}</a>
                        </h3>
                        <p className="card-description">
                        {this.props.summary} 
                            <a href={this.props.action}> Más... </a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }

}
export default ExperienceBlogUI

ExperienceBlogUI.propTypes = {
    action: PropTypes.string
    ,title: PropTypes.string
    ,tag: PropTypes.string
    ,image: PropTypes.string
    ,summary: PropTypes.string
};