import { Component } from "react";
import Bar from "../../components/Bar";

class About extends Component {
  render() {
    return (
      <div>
        <Bar />
        <table border="1">
          <tr>
            <td>Nome</td>
            <td>Diego de Melo Gonzaga</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default About;
