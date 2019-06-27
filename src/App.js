import React, { useState } from "react";
import "./App.css";

//Don't remove any old codes? but I can add more.

const Item = ({ color, id, text, name, onDragStartHandler }) => (
  <section
    className="item"
    style={{
      backgroundColor: color
    }}
    draggable
    onDragStart={onDragStartHandler}
    key={id}
    id={name}
  >
    <span> {text} </span>{" "}
  </section>
);

const getItems = (productItems, items) =>
  productItems.map(
    productItem => items.filter(item => productItem === item.name)[0]
  );

const Product = ({
  name,
  items,
  onDropHandler,
  onDragOverHandler,
  onDragStartHandler,
  onClickHandler
}) => (
  <article
    className="product"
    key={name}
    onDrop={onDropHandler}
    onDragOver={onDragOverHandler}
  >
    {" "}
    {items.map((item, index) => (
      <Item
        {...item}
        onDragStartHandler={onDragStartHandler}
        onClickHandler={onClickHandler}
        key={"item" + index}
      />
    ))}{" "}
  </article>
);

function App(props) {
  const [values, setValues] = useState({
    productsContainer: [
      {
        name: "Products in this Rate Plan",
        items: ["standard", "heritage"]
      },
      {
        name: "Available Products",
        items: ["deluxe"]
      }
    ],
    items: [
      {
        name: "standard",
        color: "#3f51b5",
        text: "Standard"
      },
      {
        name: "heritage",
        color: "#ff5722",
        text: "Heritage"
      },
      {
        name: "deluxe",
        color: "blue",
        text: "Deluxe"
      }
    ]
  });

  const handleOnDragStart = (event, containerId) => {
    const id = event.target.id;

    console.log("Dragging the", id);
    if (containerId === 0) {
      console.log("This comes from Products in Rate Plan");
    } else {
      console.log("This comes from Available Products");
    }

    event.dataTransfer.setData("id", id);
    event.dataTransfer.setData("containerId", containerId);
  };

  const handleOnDrop = (event, i) => {
    const id = event.dataTransfer.getData("id");
    const containerId = event.dataTransfer.getData("containerId");

    if (containerId != i) {
      const productsContainer = values.productsContainer.map(
        (product, index) => {
          if (index == containerId) {
            product.items = product.items.filter(item => {
              return item !== id;
            });
          }
          if (index === i) {
            product.items = product.items.concat(id);
          }

          return product;
        }
      );

      console.log(productsContainer);

      setValues(productsContainer);
    } else {
      console.log("No");
    }
  };

  const handleOnDragOver = event => {
    event.preventDefault();
  };

  return (
    <div className="app">
      <div className="product-container">
        {" "}
        {values.productsContainer.map((product, index) => (
          <Product
            items={getItems(product.items, values.items)}
            listkey={product.name}
            onDragStartHandler={event => handleOnDragStart(event, index)}
            onDropHandler={event => handleOnDrop(event, index)}
            onDragOverHandler={handleOnDragOver}
            key={index}
          />
        ))}{" "}
      </div>{" "}
    </div>
  );
}

export default App;
