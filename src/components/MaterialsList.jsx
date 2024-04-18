import React, { useRef, useState } from "react";
import { materials } from "../assets/materialsList";

function MaterialsList({ displayMaterial }) {
  const [selectedMaterial, setselectedMaterial] = useState(1);

  const itemRefs = useRef([]);

  const handleMaterial = (index, material) => {
    setselectedMaterial(index);
    materials.forEach((item, i) => {
      const singleItem = itemRefs.current[i];

      if (singleItem) {
        singleItem.style.backgroundColor = i === index ? "#dfffeb" : "";
        singleItem.style.border = i === index ? "1px solid #7cffac" : "";
        singleItem.classList.toggle("slide-in", i === index);
        displayMaterial(material);
      }
    });
  };

  return (
    <>
      <div className="material_list">
        {materials.map((item, index) => {
          return (
            <div
              className="item"
              key={item.id}
              onClick={() => handleMaterial(index, item)}
              ref={(el) => (itemRefs.current[index] = el)}
            >
              <div className="item_desc active">
                <div className="name">{item.name}</div>
                <span
                  className={`label ${
                    item.best_seller ? "active" : "in_active"
                  }`}
                >
                  Best Seller
                </span>
                <div className="details">
                  {index === selectedMaterial && (
                    <ul>
                      {item.description.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default MaterialsList;
