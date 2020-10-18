import React from "react";

const AddFoodItem = (props) => {
  return (
    <div class="container">
      <form onSubmit={props.addFoodItem}>
        <div className="form-group">
          <button id="plus2" className="plus">
            +
          </button>
          <br></br>
          <button className="plus">+</button>
          <input
            id="food_type"
            placeholder="Food Type"
            type="text"
            className="form-control"
            name="food_type"
            value={props.food_type}
            onChange={props.handleInputChange}
            required
            list="exampleList"
          />
          <datalist id="exampleList">
            <option value={props.food_type1} />
            <option value={props.food_type2} />
            <option value={props.food_type3} />
            <option value={props.food_type4} />
          </datalist>
        </div>

        <div className="form-group">
          <input
            id="food"
            placeholder="Enter Food Name"
            type="text"
            className="form-control"
            name="food"
            value={props.food}
            onChange={props.handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            min="1"
            placeholder="Enter Food price"
            type="number"
            className="form-control"
            name="cost"
            value={props.cost}
            onChange={props.handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            id="description"
            placeholder="Enter Food Description"
            type="text"
            className="form-control"
            name="description"
            value={props.description}
            onChange={props.handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            placeholder="Enter Food URL"
            type="text"
            className="form-control"
            name="url"
            value={props.url}
            onChange={props.handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <select
            required
            id="food_sub_type"
            placeholder="select your beverage"
            className="form-control"
            name="food_sub_type"
            value={props.food_sub_type}
            onChange={props.handleInputChange}
          >
            <optgroup label={props.food_type1}>
              <option value="" disabled selected>
                Food_Sub_Type
              </option>
              <option>{props.sub1}</option>
              <option>{props.sub2}</option>
              <option>{props.sub3}</option>
              <option>{props.sub4}</option>
            </optgroup>

            <optgroup label={props.food_type2}>
              <option>{props.sub5}</option>
              <option>{props.sub6}</option>
            </optgroup>
            <optgroup label={props.food_type3}>
              <option>{props.sub7}</option>
            </optgroup>
            <optgroup label={props.food_type4}>
              <option>{props.sub8}</option>
              <option>{props.sub9}</option>
            </optgroup>
          </select>
        </div>

        <button id="add" className="btn btn-success mt-2">
          {" "}
          Add To Menu{" "}
        </button>
      </form>
    </div>
  );
};

export default AddFoodItem;
