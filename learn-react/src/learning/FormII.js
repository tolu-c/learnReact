import React, { Component } from "react";

export default class FormII extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "empty",
      dietaryRestrictions: {
        vegan: false,
        kosher: false,
        lactoseFree: false,
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
    const { name, value, type, checked } = e.target;
    type === "checkbox"
      ? this.setState((prevState) => {
          return {
            dietaryRestrictions: {
              ...prevState.dietaryRestrictions,
              [name]: checked,
            },
          };
        })
      : this.setState({
          [name]: value,
        });
  }

  render() {
    let nameText, ageText, destinationText, genderText;
    this.state.firstName === "" && this.state.lastName === ""
      ? (nameText = "")
      : (nameText = this.state.firstName + " " + this.state.lastName + ".");

    this.state.age === ""
      ? (ageText = "")
      : (ageText = this.state.age + " years old.");

    this.state.destination === "empty"
      ? (destinationText = "No Destination Selected Yet.")
      : (destinationText = this.state.destination + ".");

    this.state.gender === ""
      ? (genderText = "No Gender Selected Yet.")
      : (genderText = this.state.gender + ".");
    return (
      <div>
        <form>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            name="age"
            placeholder="Age"
            value={this.state.age}
            onChange={this.handleChange}
          />
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={this.handleChange}
            />{" "}
            Male
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={this.handleChange}
            />{" "}
            Female
          </label>
          <br />
          <label>
            Destination:
            <select
              name="destination"
              onChange={this.handleChange}
              value={this.state.destination}
            >
              <option value="empty"></option>
              <option value="Lagos">Lagos</option>
              <option value="Oyo">Oyo</option>
              <option value="Apete">Apete</option>
              <option value="UI">UI</option>
            </select>
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="vegan"
              onChange={this.handleChange}
              checked={this.state.dietaryRestrictions.vegan}
            />{" "}
            Vegan
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="kosher"
              onChange={this.handleChange}
              checked={this.state.dietaryRestrictions.kosher}
            />{" "}
            Kosher
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="lactoseFree"
              onChange={this.handleChange}
              checked={this.state.dietaryRestrictions.lactoseFree}
            />{" "}
            Lactose Free
          </label>
        </form>
        <br />
        <hr />
        <br />
        <h3>Entered Information:</h3>
        <p>Your Full Name: {nameText}</p>
        <p>Your Age: {ageText}</p>
        <p>Your Gender: {genderText}</p>
        <p>Your Destination: {destinationText}</p>
        <p>Your Dietary Restrictions: </p>
        <p>Vegan: {this.state.dietaryRestrictions.vegan ? "Yes" : "No"}</p>
        <p>Kosher: {this.state.dietaryRestrictions.kosher ? "Yes" : "No"} </p>
        <p>
          Lactose Free:
          {this.state.dietaryRestrictions.lactoseFree ? "Yes" : "No"}
        </p>
      </div>
    );
  }
}
