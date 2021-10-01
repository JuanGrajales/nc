import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Errors, LocalForm, Control } from "react-redux-form";

const maxLength = (len) => (val) => val?.length <= len;
const minLength = (len) => (val) => val?.length > len;

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };

  handleSubmit = (values) => {
    alert(JSON.stringify(values));
  };

  render() {
    return (
      <div>
        <Button outline onClick={this.toggleModal}>
          <i className="fa fa-pencil fa-lg" /> Submit Comment
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <div className="form-group">
                <Label htmlFor="rating">Rating</Label>
                <Control.select
                  className="form-control"
                  model=".rating"
                  name="rating"
                  id="rating"
                  defaultValue="1"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Control.select>
              </div>
              <div className="form-group">
                <Label htmlFor="author">Author</Label>
                <Control.text
                  className="form-control"
                  model=".author"
                  name="author"
                  id="author"
                  validators={{
                    maxLength: maxLength(15),
                    minLength: minLength(2),
                    print: (val) => console.log(val),
                  }}
                />
                <Errors
                  model=".author"
                  show="touched"
                  component="div"
                  messages={{
                    minLength: "Must be at least 2 characters",
                    maxLength: "Must be less than or equal to 15 characters",
                  }}
                  className="text-danger"
                />
              </div>
              <div className="form-group">
                <Label htmlFor="text">Comment</Label>
                <Control.textarea
                  className="form-control"
                  model=".text"
                  name="text"
                  id="text"
                  rows="6"
                />
              </div>
              <Button type="submit" color="primary">
                Submit
              </Button>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

function RenderCampsite({ campsite }) {
  return (
    <div className="col-md-5 m-1">
      <Card>
        <CardImg top src={campsite.image} alt={campsite.name} />
        <CardBody>
          <CardText>{campsite.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function RenderComments({ comments }) {
  if (comments) {
    return (
      <div className="col-md-5 m-1">
        <h4>Comments</h4>
        {comments.map((comment) => {
          return (
            <div key={comment.id}>
              <p>
                {comment.text}
                <br />
                -- {comment.author},{" "}
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(comment.date)))}
              </p>
            </div>
          );
        })}
        <CommentForm />
      </div>
    );
  }
  return <div />;
}

function CampsiteInfo(props) {
  if (props.campsite) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/directory">Directory</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
            </Breadcrumb>
            <h2>{props.campsite.name}</h2>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderCampsite campsite={props.campsite} />
          <RenderComments comments={props.comments} />
        </div>
      </div>
    );
  }
  return <div />;
}

export default CampsiteInfo;
