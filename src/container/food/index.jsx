import React from "react";
import FoodItemList from "./partials/FoodItemList";
import AddFoodItem from "./partials/AddFoodItem";
import logo from "../../assets/menu.png";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      id: null,
      userId: 1,
      food: "",
      food_type: "",
      food_sub_type: "",
      url: "",
      cost: "",
      description: "",
      status: false,
      foodItem: {},
      foodItems: [],
      editing: false,
      food_type1: "",
      food_type2: "",
      food_type3: "",
      food_type4: "",
      sub1: "",
      sub2: "",
      sub3: "",
      sub4: "",
      sub5: "",
      sub6: "",
      sub7: "",
      sub8: "",
      sub9: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.deleteFoodItem = this.deleteFoodItem.bind(this);
    this.addFoodItem = this.addFoodItem.bind(this);
    this.fetchType = this.fetchType(this);
  }
  fetchType = async () => {
    const responce_type = await fetch(
      "https://traineer-064a.restdb.io/rest/category",
      {
        async: true,
        crossDomain: true,
        method: "GET",
        headers: {
          "content-type": "application/json",
          "x-apikey": "5f81fab25799e648a5a8eec6",
          "cache-control": "no-cache",
        },
      }
    ).then((responce_type) => responce_type.json());

    this.setState({ food_type1: responce_type[0].categoryType });
    this.setState({ food_type2: responce_type[1].categoryType });
    this.setState({ food_type3: responce_type[2].categoryType });
    this.setState({ food_type4: responce_type[3].categoryType });
    this.setState({ sub1: responce_type[0].categorySubType[0] });
    this.setState({ sub2: responce_type[0].categorySubType[1] });
    this.setState({ sub3: responce_type[0].categorySubType[2] });
    this.setState({ sub4: responce_type[0].categorySubType[3] });
    this.setState({ sub5: responce_type[1].categorySubType[0] });
    this.setState({ sub6: responce_type[1].categorySubType[1] });
    this.setState({ sub7: responce_type[2].categorySubType[0] });
    this.setState({ sub8: responce_type[3].categorySubType[0] });
    this.setState({ sub9: responce_type[3].categorySubType[1] });

    if (this.state.food_type === responce_type[0].categoryType) {
      alert("hellooooooo");
    }
    console.log(responce_type);
  };
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }
  addFoodItem(event) {
    event.preventDefault();
    if (!this.state.food) return;
    const foodItem = {
      id: this.state.foodItems.length + 1,
      food: this.state.food,
      cost: this.state.cost,
      description: this.state.description,
      food_type: this.state.food_type,
      food_sub_type: this.state.food_sub_type,
      url: this.state.url,
      userId: this.state.userId,
      statu: this.state.status,
    };
    this.setState({
      food: "",
      cost: "",
      description: "",
      food_sub_type: "",
      food_type: "",
      url: "",
      foodItem: foodItem,
      foodItems: [...this.state.foodItems, foodItem],
    });
  }

  deleteFoodItem(id) {
    const foodItems = this.state.foodItems.filter((item) => item.id !== id);
    this.setState({ foodItems: foodItems });
    if (this.state.editing === true) {
      window.location.reload();
    }
  }

  render() {
    const { foodItems } = this.state;
    return (
      <div className="App">
        <div class="topnav">
          <a class="active" href="#home">
            Welcome
          </a>
          <a href="#home" id="mobilea">
            {" "}
            , UserName
            <img alt="menu1" id="menu1" src={logo} />
          </a>

          <a id="username" href="#news">
            Username{" "}
          </a>
          <img
            alt="user"
            id="img"
            src="https://t3.ftcdn.net/jpg/01/44/52/94/240_F_144529471_9LhgvhXAYfy50nDjir1aadtMuiMiYUDX.jpg"
          />

          <img
            alt="menu"
            id="menu"
            src="https://icon-library.com/images/white-menu-icon/white-menu-icon-12.jpg"
          />
        </div>
        <div class="container">
          <div className="row App-main">
            {
              <AddFoodItem
                food={this.state.food}
                cost={this.state.cost}
                description={this.state.description}
                url={this.state.url}
                food_type1={this.state.food_type1}
                food_type2={this.state.food_type2}
                food_type3={this.state.food_type3}
                food_type4={this.state.food_type4}
                sub1={this.state.sub1}
                sub2={this.state.sub2}
                sub3={this.state.sub3}
                sub4={this.state.sub4}
                sub5={this.state.sub5}
                sub6={this.state.sub6}
                sub7={this.state.sub7}
                sub8={this.state.sub8}
                sub9={this.state.sub9}
                food_type={this.state.food_type}
                food_sub_type={this.state.food_sub_type}
                handleInputChange={this.handleInputChange}
                addFoodItem={this.addFoodItem}
                fetchType={this.fetchType}
              />
            }
          </div>

          <div class="vl"></div>
          <div id="divapp" class="col-4">
            <FoodItemList
              id="list"
              foodItems={foodItems}
              deleteFoodItem={this.deleteFoodItem}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
