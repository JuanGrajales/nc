import React, { Component } from "react";
// step 2 ADD
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
// step 2 ADD

class CampsiteInfo extends Component {
  // step 1 ADD
  renderCampsite(campsite) {
    return (
      <div className="col-md-5 m-1">
        <Card>
          <CardImg top src={campsite.image} alt={campsite.name} />
          <CardBody>
            <CardTitle>{campsite.name}</CardTitle>
            <CardText>{campsite.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
  // step 1 ADD

  render() {
    if (this.props.campsite) {
      return (
        // step 3 EDIT ADD
        <div className="row">{this.renderCampsite(this.props.campsite)}</div>
        // step 3 EDIT ADD
      );
    }
    return <div />;
  }
}

export default CampsiteInfo;
