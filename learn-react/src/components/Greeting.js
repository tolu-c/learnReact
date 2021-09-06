import React, { Component } from "react";

class Greeting extends Component {
  render() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    let name = "BoSs";

    hours < 12
      ? (timeOfDay = "Morning")
      : hours > 12 && hours <= 16
      ? (timeOfDay = "Afternoon")
      : (timeOfDay = "Evening");
      
    return (
      <div>
        <div>
          <p className="greeting">
            Good {timeOfDay}, {name}!
          </p>
        </div>
      </div>
    );
  }
}

// function Greeting() {
//   const date = new Date();
//   const hours = date.getHours();
//   let timeOfDay;

//   let name = "Tolu Adeyemo";

//   if (hours < 12) {
//     timeOfDay = "morning";
//   } else if (hours > 12 && hours < 14) {
//     timeOfDay = "afternoon";
//   } else {
//     timeOfDay = "evening";
//   }

//   return (
//     <div>
//       <div>
//         <p className="greeting">
//           Good {timeOfDay}, {name}
//         </p>
//       </div>
//     </div>
//   );
// }

export default Greeting;
