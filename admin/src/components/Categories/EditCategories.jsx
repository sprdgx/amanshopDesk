import React, { useState } from 'react';
import './EditCategory.css';
import { userRequest } from "../../requestMethods";
import FileBase64 from 'react-file-base64';

const EditCategory = ({ category, onUpdate, onCancel }) => {
  const [editedCategory, setEditedCategory] = useState({
    cat: category.cat,
    img: category.img,
    gradiantColorOne: category.gradiantColorOne,
    gradiantColorTwo: category.gradiantColorTwo
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedCategory({ ...editedCategory, [name]: value });
  };

  const handleImgChange = (file) => {
    setEditedCategory({ ...editedCategory, img: file.base64 });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await userRequest.put(`/categories/${category._id}`, editedCategory);
      onUpdate(response.data);
    } catch (error) {
      console.error('Error updating category:', error);
    }
  };

  return (
    <div className="edit-category-modal">
      <div className="edit-category-content">
        <span className="close" onClick={onCancel}>&times;</span>
        <h2>Edit Category</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Category"
            name="cat"
            value={editedCategory.cat}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Gradient Color One"
            name="gradiantColorOne"
            value={editedCategory.gradiantColorOne}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Gradient Color Two"
            name="gradiantColorTwo"
            value={editedCategory.gradiantColorTwo}
            onChange={handleChange}
          />
          <FileBase64
            multiple={false}
            onDone={handleImgChange}
          />
          <div className="edit-category-buttons">
            <button type="submit">Save</button>
            <button type="button" onClick={onCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCategory;
