import * as React from "react";
import HouseCard from "./components/HouseCard";
import Grid from "@material-ui/core/Grid";
const style = {
  position: "fixed",
  top: "20%",
  left: "50%",
  width: "50%",
  transform: "translate(-50%, -50%)",
  padding: "0px !important",
  margin: "5px",
};

class ListHouses extends React.Component {
  constructor() {
    super();
    this.state = {
        houses: []
    }
  }

  handleDateChange = (name, value) => {
    console.log(value);
    this.setState({
      [name]: value,
    });
  };

  save_house = () => {
    console.log(this.state);
  };

  render() {
    return (
      <React.Fragment>
        <div style={style}>
          <Grid container spacing={1}>
            {this.state.houses.map((house) => {
              <Grid item xs={4}>
                <HouseCard
                  onChange={this.handleDateChange}
                  title={house.title}
                  end={house.end}
                  city={house.city}
                  neighborhood={house.neighborhood}
                  rooms={house.rooms}
                  area={house.area}
                />
              </Grid>;
            })}
            <Grid item xs={4}>
                <HouseCard
                  onChange={this.handleDateChange}
                  title="teste"
                  end="Rua dos bobos n 0"
                  city="Contagem"
                  neighborhood="Bairro da mari"
                  rooms="5"
                  area="4"
                  price="R$2000"
                />
              </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default ListHouses;