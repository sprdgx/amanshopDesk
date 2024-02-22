import React, { useState, useEffect } from 'react';
import { userRequest } from "../../requestMethods";
import './categories.css';
import FileBase64 from 'react-file-base64';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EditCategory from '../../components/Categories/EditCategories';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState({
    title:'',
    cat: '',
    img: '',
    gradiantColorOne: '',
    gradiantColorTwo: ''
  });
  const [editingCategory, setEditingCategory] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await userRequest.get('/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []); 

  const handleImgChange = (file) => {
    setNewCategory({ ...newCategory, img: file.base64 });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postNewCategory(newCategory);
      console.log('Category created successfully:', response.data);
      // Handle success, such as displaying a success message to the user
      setCategories([...categories, response.data]);
      setNewCategory({
        title:'',
        cat: '',
        img: '',
        gradiantColorOne: '',
        gradiantColorTwo: ''
      });
    } catch (error) {
      console.error('Error creating category:', error);
      // Handle error, such as displaying an error message to the user
    }
  };

  const postNewCategory = async (category) => {
    return userRequest.post('/categories', category);
  };

  const handleDelete = async (categoryId) => {
    try {
      await userRequest.delete(`/categories/${categoryId}`);
      setCategories(categories.filter(category => category._id !== categoryId));
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  const handleEdit = (category) => {
    setEditingCategory(category);
    setIsEditModalOpen(true);
  };

  const handleCancelEdit = () => {
    setEditingCategory(null);
    setIsEditModalOpen(false);
  };

  const handleUpdateCategory = async (updatedCategory) => {
    try {
      const response = await userRequest.put(`/categories/${editingCategory._id}`, updatedCategory);
      const updatedCategories = categories.map(category =>
        category._id === editingCategory._id ? response.data : category
      );
      setCategories(updatedCategories);
      setEditingCategory(null);
      setIsEditModalOpen(false);
    } catch (error) {
      console.error('Error updating category:', error);
    }
  };

  return (
    <div className="categories-container">
      <h2>Categories</h2>
      <ul className="categories-list">
        {categories.map(category => (
          <div key={category._id} className="category-item">
            <img src={category.img} alt={category.title} className="category-image" />
            <div className="category-title">{category.cat}</div>
            <DeleteIcon onClick={() => handleDelete(category._id)} />
            <EditIcon onClick={() => handleEdit(category)} />
          </div>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
      <input
          type="text"
          placeholder="Title"
          value={newCategory.title}
          onChange={(e) => setNewCategory({ ...newCategory, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Category"
          value={newCategory.cat}
          onChange={(e) => setNewCategory({ ...newCategory, cat: e.target.value })}
        />
        <input
          type="text"
          placeholder="Gradient Color One"
          value={newCategory.gradiantColorOne}
          onChange={(e) => setNewCategory({ ...newCategory, gradiantColorOne: e.target.value })}
        />
        <input
          type="text"
          placeholder="Gradient Color Two"
          value={newCategory.gradiantColorTwo}
          onChange={(e) => setNewCategory({ ...newCategory, gradiantColorTwo: e.target.value })}
        />
        <FileBase64
          multiple={false}
          onDone={handleImgChange}
        />
        <button type="submit">Add Category</button>
      </form>
      {isEditModalOpen && editingCategory && (
        <EditCategory
          category={editingCategory}
          onUpdate={handleUpdateCategory}
          onCancel={handleCancelEdit}
        />
      )}
    </div>
  );
};

export default Categories;
