import React from "react";
import store from "../../redux/store";
import "./All.css"
export default function Public() {
      let goToPublic = (e)=>{
          console.log("sd")
store.dispatch({
  type:"GO_TO_CARD",
  payload: {vale : e.target.textContent}
})
  }
  return (
    <section className="publics">
      <div className="public-menu">
        <ul id="public-menu">
          <li  onClick={(e) => goToPublic(e)}>Azerbaycan</li>
          <li onClick={(e) => goToPublic(e)}>Turk</li>
          <li onClick={(e) => goToPublic(e)}>English</li>
        </ul>
      </div>
    </section>
  );
}
