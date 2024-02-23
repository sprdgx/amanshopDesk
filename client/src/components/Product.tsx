import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Product.module.css';
import Image from 'next/image';

interface ProductProps {
  item: {
    _id: string;
    img: string;
    title: string;
    price?: string;
  };
}

const Product: React.FC<ProductProps> = ({ item }) => {
  return (
    <div className={styles.container}>
      <Link href={`/${item._id}`}>
        <Image src={item.img} alt="Product Image" className={styles.image} width={335} height={335} />
        <div className={styles.info}>
          <h1 className={styles.infoT}>{item.title}</h1>
          <h1 className={styles.infoP}>Prix: {item.price} DA</h1>
        </div>
      </Link>
    </div>
  );
};

export default Product;
