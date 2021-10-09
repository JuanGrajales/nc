import React, { Component } from "react";
// step 2 ADD
import CampsiteInfo from "./1-CampsiteInfoComponent";
// step 2 ADD
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCampsite: null,
    };
  }

  onCampsiteSelect(campsite) {
    this.setState({ selectedCampsite: campsite });
  }

  renderSelectedCampsite(campsite) {
    if (campsite) {
      return (
        <Card>
          <CardImg top src={campsite.image} alt={campsite.name} />
          <CardBody>
            <CardTitle>{campsite.name}</CardTitle>
            <CardText>{campsite.description}</CardText>
          </CardBody>
        </Card>
      );
    }
    return <div />;
  }

  render() {
    const directory = this.props.campsites.map((campsite) => {
      return (
        <div key={campsite.id} className="col-md-5 m-1">
          <Card onClick={() => this.onCampsiteSelect(campsite)}>
            <CardImg width="100%" src={campsite.image} alt={campsite.name} />
            <CardImgOverlay>
              <CardTitle>{campsite.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{directory}</div>
        {/* step 1 REMOVE */}
        {/* <div className="row">
          <div className="col-md-5 m-1">
            {this.renderSelectedCampsite(this.state.selectedCampsite)}
          </div>
        </div> */}
        {/* step 1 REMOVE */}

        {/* step 3 ADD */}
        <CampsiteInfo campsite={this.state.selectedCampsite} />
        {/* step 3 ADD */}
      </div>
    );
  }
}

export default Directory;
