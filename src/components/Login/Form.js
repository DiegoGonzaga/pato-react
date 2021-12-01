import { Component } from "react";
import { Form, Button } from "react-bootstrap";

const Group = Form.Group;
const Label = Form.Label;
const Control = Form.Control;
class UserForm extends Component {
  render() {
    return (
      <Form>
        <Group className="mb-3" controlId="formBasicEmail">
          <Label>E-mail address</Label>
          <Control type="email" placeholder="Enter e-mail"></Control>
        </Group>
        <Button variant="primary" type="submit" size="500">
          Submit
        </Button>
      </Form>
    );
  }
}

export default UserForm;
