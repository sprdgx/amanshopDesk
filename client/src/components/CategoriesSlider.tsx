import Image from "next/image";
import Link from 'next/link';
import styles from '@/styles/CategoriesSlider.module.css';

interface CategoryItemProps {
  item: {
    cat: string;
    img: string;
    title: string;
  };
}

const CategorySlider: React.FC<CategoryItemProps> = ({ item }) => {
  return (
    <div className={styles.categoryItem}>
      <Link href={`/categories/${item.cat}`} passHref>
        <div className={styles.imageWrapper}>
          <Image src={item.img} alt="" width={350} height={150} className={styles.imgitem}/>
        </div>
      </Link>
    </div>
  );
};

export default CategorySlider;
