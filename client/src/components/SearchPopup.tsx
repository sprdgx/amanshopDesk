import { FC, useState, useEffect } from 'react';
import styles from '@/styles/SearchPopup.module.css';
import axios from 'axios';
import { BASE_URL } from '../requestMethods';
import Product from './Product'; 

interface ProductData {
  _id: string;
  img: string;
  title: string;
}

interface SearchPopupProps {
  searchValue: string;
  onClose: () => void;
}

const SearchPopup: FC<SearchPopupProps> = ({ searchValue, onClose }) => {
  const [searchResults, setSearchResults] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (searchValue) {
      setLoading(true);
      setError(null);
      axios.get(`${BASE_URL}products/search/${searchValue}`)
        .then(response => {
          setSearchResults(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching search results:', error);
          setError("Failed to fetch search results. Please try again later.");
          setLoading(false);
        });
    }
  }, [searchValue]);

  return (
    <div className={styles.overlay} onClick={onClose} style={{ background: `linear-gradient(to top, teal, gray)` }}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2>Search Results for: {searchValue}</h2>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        <div className={styles.productList}>
          {searchResults.length > 0 ? (
            searchResults.map(product => (
              <div key={product._id} className={styles.product}>
                <Product item={product} />
              </div>
            ))
          ) : (
            <div>No products found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPopup;
