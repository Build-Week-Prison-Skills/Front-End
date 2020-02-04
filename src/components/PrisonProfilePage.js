import { render } from "react-dom";

class MainContainer extends React.Component {
  render() {
    return (
      <div className="main-container">
        <div className="nav-container">
          <a></a>
          <a></a>
          <a></a>
          <a></a>
          <a></a>
        </div>

        <aside className="group-name">
          <table>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </aside>

        <div className="cards-container">
          <div className="card1"></div>
          <div className="card2"></div>
          <div className="card3"></div>
          <div className="card4"></div>
        </div>
      </div>
    );
  }
}
