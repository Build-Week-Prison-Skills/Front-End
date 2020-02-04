import { render } from "react-dom";

class MainContainer extends React.Component {
  render() {
    return (
      <div>
        <SideContainer />
        <CardsContainer cards={this.props.cards} />
      </div>
    );
  }
}


class CardsContainer = [
{card1:                                 },
{card2:                                 },
{card3:                                  },
{card4:                                   },
{card5:                                    }    

];