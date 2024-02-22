import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import Footer from "@/components/Footer";
import { useRouter } from "next/router"; 
import { useEffect, useState } from "react";
import styles from "@/styles/Categoriespage.module.css";
import { publicRequest } from "@/requestMethods";
import Image from "next/image";

const ProductList = () => {
  const router = useRouter();
  const { categories } = router.query; 
  const cat = typeof categories === 'string' ? categories.charAt(0).toUpperCase() + categories.slice(1) : '';
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const [gradiantColorOne, setGradiantColorOne] = useState("white");
  const [gradiantColorTwo, setGradiantColorTwo] = useState("white");
  const [img, setImg] = useState('');


  useEffect(() => {
    window.scrollTo(0, 0);
    fetchGradientColorsFromDatabase();
  });

  const fetchGradientColorsFromDatabase = async () => {
    try {
      const categoryName = categories;
      const response = await publicRequest.get(`categories/${categoryName}`);
      
      const category = response.data;
  
      setGradiantColorOne(category.gradiantColorOne);
      setGradiantColorTwo(category.gradiantColorTwo);
      setImg(category.img);
    } catch (error) {
      console.error('Error fetching gradient colors:', error);
    }
  };

  return (
    <div className={styles.container} style={{ background: `linear-gradient(to top, ${gradiantColorOne}, ${gradiantColorTwo})` }}>
      <Navbar/>
      <h1 className={styles.title} style={{ color: "teal" }}>{cat}:</h1>
      <div className={styles.carousel}>
        <Image src={img} alt={`Image`} className={styles.carouselImg} width={700} height={200} />
      </div>
      <div className={styles.filterContainer}>
        <div className={styles.filter}>
          <span className={styles.filterText} style={{ color: "teal" }}>Classer par :</span>
          <select className={styles.select} onChange={(e) => setSort(e.target.value)}>
            <option className={styles.option} value="newest">Nouveautés</option>
            <option className={styles.option} value="asc">Prix (croissant)</option>
            <option className={styles.option} value="desc">Prix (décroissant)</option>
          </select>
        </div>
      </div>
      <Products filters={filters} sort={sort} />
      <Footer />
    </div>
  );
};

export default ProductList;
