import React, { useState, useRef } from "react";
import Draggable from "react-draggable";
import product from "../assets/images/product_one.webp";
import Navigation from "./Navigation";
import MaterialsList from "./MaterialsList";
import { materials } from "../assets/materialsList";

function Product() {
  const [circlePosition, setCirclePosition] = useState({ x: 100, y: 100 });
  const [direction, setDirection] = useState({ x: 100, y: 100 });
  const [material, setMaterial] = useState(null);
  const materialRef = useRef();

  const handleDirectionChange = (e) => {
    const { name, value } = e.target;
    setDirection({ ...direction, [name]: parseInt(value) || 0 });
    if (direction.x >= 0 && direction.y >= 0) {
      setCirclePosition({ x: parseInt(value) || 0, y: parseInt(value) || 0 });
    } else {
      setCirclePosition({ x: 0, y: 0 });
    }
  };
  const handleStop = (e, data) => {
    const imageRectangle = document
      .querySelector(".image_section img")
      .getBoundingClientRect();
    const draggableRectangle = document
      .querySelector(".circle")
      .getBoundingClientRect();
    const maxX = Math.round(imageRectangle.width - draggableRectangle.width);
    const maxY = imageRectangle.height - draggableRectangle.height;

    const newX = Math.max(0, Math.min(data.x, maxX));
    const newY = Math.max(0, Math.min(data.y, maxY));
    setCirclePosition({ x: newX, y: newY });
    setDirection({ x: newX, y: newY });
  };

  const displayMaterial = (item) => {
    setMaterial(item);
    materialRef.current.classList.remove("active");
    void materialRef.current.offsetWidth;
    setTimeout(() => {
      materialRef.current.classList.add("active");
    }, 100);
  };
  return (
    <>
      <div className="container">
        <Navigation />
        <div className="product_details">
          <div className="image_section">
            <Draggable position={circlePosition} onStop={handleStop}>
              <div className="circle"></div>
            </Draggable>
            <img src={product} alt="Placeholder Image" />
            {material && (
              <div className="materials fade-in" ref={materialRef}>
                <div className="material_item">
                  <img
                    src={`src/assets/images/${material.image}`}
                    alt="Material"
                  />
                </div>
                <div className="material_detail">
                  <h3>{material.name}</h3>
                  <ul>
                    {material.description.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div className="selections">
            <div className="input_selections">
              <h2>Measurement</h2>
              <div className="input_fields">
                <div className="field">
                  <label htmlFor="x-direction">X Direction</label>
                  <input
                    type="number"
                    name="x"
                    value={direction.x}
                    onChange={handleDirectionChange}
                    id="x-direction"
                    placeholder="X Direction"
                  />
                </div>
                <div className="field">
                  <label htmlFor="y-direction">Y Direction</label>
                  <input
                    type="number"
                    name="y"
                    value={direction.y}
                    onChange={handleDirectionChange}
                    id="y-direction"
                    placeholder="Y Direction"
                  />
                </div>
              </div>
              <button className="btn btn-primary">Add Item</button>
            </div>
            <div className="material_selection">
              <h2>Choose the Material</h2>
              <MaterialsList displayMaterial={displayMaterial} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
