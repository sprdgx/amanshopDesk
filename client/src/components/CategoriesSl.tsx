import { useEffect, useState } from 'react';
import CategoriesSlider from './CategoriesSlider';
import { publicRequest } from '@/requestMethods';

interface Category {
  _id: string; 
  img: string;
  title: string;
  cat: string;
}

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await publicRequest.get('/categories/'); 
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  return (
    <div style={{marginBottom:'65px', display:'flex'}}>
      {categories.map((item) => (
        <CategoriesSlider item={item} key={item._id} />
      ))}
    </div>
  );
};

export default Categories;
