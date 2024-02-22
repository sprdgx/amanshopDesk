import Image from "next/image";
import Link from 'next/link';
import styles from '@/styles/Sidebar.module.css';

interface CategoryItemProps {
  item: {
    cat: string;
    img: string;
    title: string;
  };
}

const CategoryItem: React.FC<CategoryItemProps> = ({ item }) => {
  return (
    <div className={styles.imageWrapper}>
      <Link href={`/categories/${item.cat}`} passHref >
          <Image src={item.img} alt="" width={350} height={150} className={styles.imgitem}/>
      </Link>
    </div>
  );
};

export default CategoryItem;
