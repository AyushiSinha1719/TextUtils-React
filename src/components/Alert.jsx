import React from "react";

function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1); //Capitalize first letter and then add rest of the word
    }
  return (
    props.alert && <div> {/*This is bcz alert is set to null,we dont have alert ,if it is not trigerred then dont show*/}
    <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <stong>{capitalize(props.alert.type)}: </stong>{props.alert.msg}
      </div>
    </div>
  );
}

export default Alert;
