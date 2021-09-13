import React from "react";

function FormComponents(props) {
  let nameText, ageText, destinationText, genderText;
  props.data.firstName === "" && props.data.lastName === ""
    ? (nameText = "")
    : (nameText = props.data.firstName + " " + props.data.lastName + ".");

  props.data.age === ""
    ? (ageText = "")
    : (ageText = props.data.age + " years old.");

  props.data.destination === "empty"
    ? (destinationText = "No Destination Selected Yet.")
    : (destinationText = props.data.destination + ".");

  props.data.gender === ""
    ? (genderText = "No Gender Selected Yet.")
    : (genderText = props.data.gender + ".");
  return (
    <div>
      <form>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={props.data.firstName}
          onChange={props.handleChange}
        />
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={props.data.lastName}
          onChange={props.handleChange}
        />
        <br />
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={props.data.age}
          onChange={props.handleChange}
        />
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={props.handleChange}
          />{" "}
          Male
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={props.handleChange}
          />{" "}
          Female
        </label>
        <br />
        <label>
          Destination:
          <select
            name="destination"
            onChange={props.handleChange}
            value={props.data.destination}
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
            onChange={props.handleChange}
            checked={props.data.dietaryRestrictions.vegan}
          />{" "}
          Vegan
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="kosher"
            onChange={props.handleChange}
            checked={props.data.dietaryRestrictions.kosher}
          />{" "}
          Kosher
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="lactoseFree"
            onChange={props.handleChange}
            checked={props.data.dietaryRestrictions.lactoseFree}
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
      <p>Vegan: {props.data.dietaryRestrictions.vegan ? "Yes" : "No"}</p>
      <p>Kosher: {props.data.dietaryRestrictions.kosher ? "Yes" : "No"} </p>
      <p>
        Lactose Free:
        {props.data.dietaryRestrictions.lactoseFree ? "Yes" : "No"}
      </p>
    </div>
  );
}

export default FormComponents;
