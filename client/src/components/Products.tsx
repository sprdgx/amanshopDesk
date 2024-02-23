import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from '../requestMethods';
import styles from '@/styles/Products.module.css';
import Product from "./Product";
import SearchPopup from "./SearchPopup";
import TextField from '@mui/material/TextField';
import Sidebar from "./Sidebar";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from "next/router";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


interface ProductsProps {
  sort: string;
  filters: Record<string, string>;

}

const Products: React.FC<ProductsProps> = ({ sort }) => {
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const { categories } = router.query;

 useEffect(() => {
  const getProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      let url = `${BASE_URL}products`;
      if (categories) {
        url = `${BASE_URL}products/category/${categories}`;
      }
      const res = await axios.get(url);
      setProducts(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching products:", err);
      setError("Failed to fetch products. Please try again later.");
      setLoading(false);
    }
  };
  getProducts();
}, [categories]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts([...products].sort((a, b) => a.createdAt - b.createdAt));
    } else if (sort === "asc") {
      setFilteredProducts([...products].sort((a, b) => a.price - b.price));
    } else {
      setFilteredProducts([...products].sort((a, b) => b.price - a.price));
    }
  }, [sort, products]);


  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    setIsSearchOpen(event.target.value.length > 0);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Searching for:", searchValue);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className={styles.searchContainer}>
        {!categories && (
          <>
            <div className={styles.left}>
              <IconButton
                className={styles.menuButton}
                color="inherit"
                aria-label="open drawer"
                onClick={toggleSidebar}
                edge="start"
              >
                <MenuIcon style={{ color: `teal`, height: '65px', width: '65px' }} />
              </IconButton>
              <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
            </div>
            <div className={styles.search}>
              <form onSubmit={handleSearchSubmit}>
                <TextField
                  className={styles.searchInput}
                  fullWidth
                  placeholder="Vous pouvez taper ici pour rechercher..."
                  variant="outlined"
                  size="small"
                  value={searchValue}
                  onChange={handleSearchChange}
                  InputProps={{
                    style: { color: 'black', backgroundColor: `teal` },
                  }}
                />
              </form>
              {isSearchOpen && <SearchPopup searchValue={searchValue} onClose={() => setIsSearchOpen(false)} />}
            </div>
          </>
        )}
      </div>
      {loading && <div className={styles.Loading}>
                    <ShoppingCartOutlinedIcon className={`${styles["loading-icon"]} ${styles.cartIcon}`}/>
                  </div>}
      {error && <div>Error: {error}</div>}
      <div className={styles.container}>
        {!loading && !error && (
          <>
            {categories
              ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
              : products.slice(0, 8).map((item) => <Product item={item} key={item.id} />)
            }
          </>
        )}
      </div>
    </>
  );
};

export default Products;
