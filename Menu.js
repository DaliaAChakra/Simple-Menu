import React from "react";
import "./Menu.css"
function Menu() {
  return (
    <div className="menu1">
      <div className="menu">
        <div>
        <h4>Platters</h4>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>
      </div>
      <div>
        <h4>Sandwiches</h4>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>
      </div>
      </div>
      <div className="menu">
        <div>
        <h4>Salads</h4>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>
      </div>
      <div>
        <h4>Appetizers</h4>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>
      </div>
      </div>
      <div className="menu">
        <div>
        <h4>Desserts</h4>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>
      </div>
      <div>
        <h4>Beverages</h4>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>
      </div>
      </div>
      <div className="but">
        <button className="button1">Add to Cart</button>
      </div>
    </div>
  );
}

export default Menu;
