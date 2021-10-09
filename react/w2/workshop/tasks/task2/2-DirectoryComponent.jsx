import React, { Component } from "react";
import CampsiteInfo from "./CampsiteInfoComponent";
// step 2 EDIT REMOVE
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
// step 2 EDIT REMOVE

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

  // step 1 REMOVE
  // renderSelectedCampsite(campsite) {
  //   if (campsite) {
  //     return (
  //       <Card>
  //         <CardImg top src={campsite.image} alt={campsite.name} />
  //         <CardBody>
  //           <CardTitle>{campsite.name}</CardTitle>
  //           <CardText>{campsite.description}</CardText>
  //         </CardBody>
  //       </Card>
  //     );
  //   }
  //   return <div />;
  // }
  // step 1 REMOVE

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
        <CampsiteInfo campsite={this.state.selectedCampsite} />
      </div>
    );
  }
}

export default Directory;