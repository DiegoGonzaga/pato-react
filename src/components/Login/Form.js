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
        <Group className="mb-3" controlId="formBasicPassword">
          <Label>Password</Label>
          <Control type="password" placeholder="Enter Password"></Control>
        </Group>
        <div className="d-grid gap-2">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    );
  }
}

export default UserForm;
