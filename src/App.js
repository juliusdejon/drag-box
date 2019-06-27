import React from "react";
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

class App extends React.Component {
  state = {
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
  };

  handleOnDragStart = (event, from) => {
    const id = event.target.id;

    console.log("Dragging the", id);
    console.log("From ", from);

    event.dataTransfer.setData("id", id);
    event.dataTransfer.setData("from", from);
  };

  handleOnDrop = (event, i) => {
    const id = event.dataTransfer.getData("id");
    const from = event.dataTransfer.getData("from");

    if (from != i) {
      const productsContainer = this.state.productsContainer.map(
        (product, index) => {
          if (index == from) {
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

      this.setState({
        productsContainer: productsContainer
      });
    } else {
      console.log("No");
    }
  };

  handleOnDragOver = event => {
    event.preventDefault();
  };

  render() {
    const { productsContainer, items } = this.state;

    return (
      <div className="app">
        <div className="product-container">
          {" "}
          {productsContainer.map((product, index) => (
            <Product
              items={getItems(product.items, items)}
              listkey={product.name}
              onDragStartHandler={event => this.handleOnDragStart(event, index)}
              onDropHandler={event => this.handleOnDrop(event, index)}
              onDragOverHandler={this.handleOnDragOver}
              key={index}
            />
          ))}{" "}
        </div>{" "}
      </div>
    );
  }
}

export default App;
