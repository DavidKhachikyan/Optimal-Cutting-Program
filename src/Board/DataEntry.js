import React, { useState, useEffect } from "react";

const DataEntry = ({ addPart, editPart, parts, deletePart }) => {
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [quantity, setQuantity] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    if (editingIndex !== null) {
      const partToEdit = parts[editingIndex];
      setHeight(partToEdit.height);
      setWidth(partToEdit.width);
      setQuantity(partToEdit.quantity);
    }
  }, [editingIndex, parts]);

  const handleAddOrUpdatePart = () => {
    if (height && width && quantity) {
      const newPart = {
        height: Number(height),
        width: Number(width),
        quantity: Number(quantity),
      };

      if (editingIndex !== null) {
        editPart(editingIndex, newPart);
        setEditingIndex(null);
      } else {
        addPart(newPart);
      }

      setHeight("");
      setWidth("");
      setQuantity("");
    }
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    deletePart(index);
    setEditingIndex(null);
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Height"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <input
        type="number"
        placeholder="Width"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button onClick={handleAddOrUpdatePart}>
        {editingIndex !== null ? "Update" : "Add"} Part
      </button>
      {editingIndex !== null && (
        <button onClick={() => setEditingIndex(null)}>Cancel Edit</button>
      )}
      <ul>
        {parts.map((part, index) => (
          <li key={index}>
            {`Height: ${part.height}, Width: ${part.width}, Quantity: ${part.quantity}`}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataEntry;
