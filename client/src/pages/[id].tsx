import { FC, useState, useEffect } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch } from "react-redux";
import { useRouter } from "next/router"; 
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";

import styles from "@/styles/ProductPage.module.css";
import Image from "next/image";

const Products: FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const productId = id;
  const [product, setProduct] = useState<any>({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [not, setNot] = useState<string | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/products/${productId}`);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [productId]);

  const handleQuantity = (type: "dec" | "inc") => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(
      addProduct({ ...product, quantity, color, size })
    );
    setNot("Ajouté avec succès.");
    setTimeout(() => {
      setNot(null);
    }, 3000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      {not && <div className={`${styles.notification} customNotification`}>{not}</div>}
      <Navbar />
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          {product.imgs && product.imgs.length > 0 ? (
            <Carousel showThumbs={false}>
              {product.imgs.map((img: string, index: number) => (
                <div key={index}>
                  <Image className={styles.image} src={img} alt="" width={250} height={250} />
                </div>
              ))}
            </Carousel>
          ) : (
            <Image className={styles.image} src={product.img} alt="" width={250} height={250} />
          )}
        </div>
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>{product.title}</h1>
          <div className={styles.desc}>
            <p className={styles.desscc}>{product.desc}</p>
            {product.detail && (
              <ul className={styles.detailList}>
                {product.detail.map((detail: string, index: number) => (
                  <li className={styles.detailTitle} key={index}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
          <div className={styles.done}>
            <div className={styles.price}>{product.price}.DA</div>
            <div className={styles.buttonWrapper}>
              <div className={styles.amountContainer}>
                <RemoveIcon onClick={() => handleQuantity("dec")} />
                <span className={styles.amount}>{quantity}</span>
                <AddIcon onClick={() => handleQuantity("inc")} />
              </div>
              <button className={styles.button} onClick={handleClick}>Ajouter Au Panier</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
