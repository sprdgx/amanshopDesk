import { FC, useState, useEffect } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { increaseProductQuantity , decreaseProductQuantity} from "../redux/cartRedux";
import CheckOrder from "@/components/CheckOrder";
import styles from '@/styles/Cart.module.css';
import Image from "next/image";

type ShippingPricesType = {
    [key: string]: {
      desktop: number;
      home: number;
    };
};

const ShippingPrices: ShippingPricesType = {
    Alger: {
        desktop: 250,
        home: 400,
      },
      Boumerdes: {
        desktop: 400,
        home: 650,
      },
      Blida: {
        desktop: 400,
        home: 650,
      },
      Tipaza: {
        desktop: 400,
        home: 650,
      },
      Tizi_Ouzou: {
        desktop: 450,
        home: 750,
      },
      Bouira: {
        desktop: 450,
        home: 750,
      },
      Bejaia: {
        desktop: 450,
        home: 850,
      },
      Media: {
        desktop: 400,
        home: 800,
      },
      Jijel: {
        desktop: 450,
        home: 900,
      },
      BBA: {
        desktop: 450,
        home: 850,
      },
      Ain_Defla: {
        desktop: 450,
        home: 850,
      },
      Ain_Timouchent: {
        desktop: 450,
        home: 850,
      },
      Annaba: {
        desktop: 500,
        home: 900,
      },
      Batna: {
        desktop: 500,
        home: 900,
      },
      Chlef: {
        desktop: 450,
        home: 800,
      },
      Canstantine: {
        desktop: 450,
        home: 850,
      },
      El_Taref: {
        desktop: 0,
        home: 950,
      },
      Guelma: {
        desktop: 500,
        home: 950,
      },
      Khenchla: {
        desktop: 500,
        home: 950,
      },
      Mascara: {
        desktop: 450,
        home: 850,
      },
      Mila: {
        desktop: 0,
        home: 900,
      },
      Moustaganem: {
        desktop: 450,
        home: 850,
      },
      Msila: {
        desktop: 450,
        home: 850,
      },
      Oran: {
        desktop: 450,
        home: 850,
      },
      Oum_El_Bouaghi: {
        desktop: 450,
        home: 850,
      },
      Relizane: {
        desktop: 0,
        home: 850,
      },
      Saida: {
        desktop: 500,
        home: 900,
      },
      Setif: {
        desktop: 450,
        home: 850,
      },
      Sidi_Bel_Abbes: {
        desktop: 500,
        home: 900,
      },
      Skikda: {
        desktop: 500,
        home: 900,
      },
      Souk_Ahras: {
        desktop: 0,
        home: 950,
      },
      Tebessa: {
        desktop: 500,
        home: 900,
      },
      Tiaret: {
        desktop: 450,
        home: 850,
      },
      Tisemsiit: {
        desktop: 0,
        home: 900,
      },
      Telemcen: {
        desktop: 500,
        home: 900,
      },
      Biskra: {
        desktop: 550,
        home: 1000,
      },
      Ouled_Diellal: {
        desktop: 0,
        home: 1000,
      },
      Djelfa: {
        desktop: 700,
        home: 1000,
      },
      Laghouat: {
        desktop: 700,
        home: 1000,
      },
      Gherdaia: {
        desktop: 700,
        home: 1100,
      },
      El_menia: {
        desktop: 0,
        home: 1100,
      },
      El_oued: {
        desktop: 0,
        home: 1100,
      },
      El_Mghair: {
        desktop: 0,
        home: 1100,
      },
      Ouargia: {
        desktop: 700,
        home: 1100,
      },
      Touggourt: {
        desktop: 0,
        home: 1200,
      },
      El_Bavad: {
        desktop: 550,
        home: 1000,
      },
      Naama: {
        desktop: 800,
        home: 1200,
      },
      Bechar: {
        desktop: 800,
        home: 1200,
      },
      Beni_Abbes: {
        desktop: 0,
        home: 1200,
      },
      Adrar: {
        desktop: 1000,
        home: 1500,
      },
      Timimoune: {
        desktop: 0,
        home: 1500,
      },
      Ain_Salah: {
        desktop: 0,
        home: 1900,
      },
      Tamanrasset: {
        desktop: 1200,
        home: 1900,
      },};

const Cart: FC<{themeToggler: any, theme: any}> = ({themeToggler,theme}) => {

    
    const [selectedWilaya, setSelectedWilaya] = useState<keyof ShippingPricesType>('Alger');
    const [selectedDeliveryType, setSelectedDeliveryType] = useState<'desktop' | 'home'>('desktop');
    
    const [shippingCost, setShippingCost] = useState<number>(
      ShippingPrices[selectedWilaya][selectedDeliveryType]
    );

    const cart = useSelector((state: any) => state.cart);

    const dispatch = useDispatch();

    const handleIncreaseQuantity = (productId: string) => {
        dispatch(increaseProductQuantity({ id: productId }));
    };

    const handleDecreaseQuantity = (productId: string) => {
        dispatch(decreaseProductQuantity({ id: productId }));
    };

    const handleDeliveryTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value as "desktop" | "home";
        setSelectedDeliveryType(value);
    };
  
    const wilayaOptions = Object.keys(ShippingPrices).map((wilaya) => {
        const formattedWilaya = wilaya.replace(/_/g, ' ');
        return (
            <option key={wilaya} value={wilaya}>
                {formattedWilaya}
            </option>
        );
    });

    useEffect(() => {
    }, [selectedWilaya])
  

    useEffect(() => {
        setShippingCost(ShippingPrices[selectedWilaya][selectedDeliveryType]);
    }, [selectedWilaya, selectedDeliveryType]);


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [isOpenPopup, setIsOpenPopup] = useState(false);


    return (
      <div className={styles.container} style={{ background: `linear-gradient(to top, rgba(0, 128, 128, 0.196), white)` }}>
        <div className={styles.countainer}>
            <Navbar/>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Votre Achats</h1>
                <div className={styles.top}></div>
                <div className={styles.bottom}>
                    <div className={styles.info}>
                        {cart.products.map((product: any) => (
                            <div className={styles.product} key={product._id}>
                                <div className={styles.productDetail}>
                                    <Image src={product.img} alt="" width={200} height={200}  />
                                    <div className={styles.details}>
                                        <span className={styles.productName}>
                                            <b>Product:</b> {product.title}
                                        </span>
                                        <span className={styles.productId}>
                                            <b>ID:</b> {product._id}
                                        </span>
                                        <div className={styles.productColor} style={{backgroundColor: product.color}}></div>
                                    </div>
                                </div>
                                <div className={styles.priceDetail}>
                                    <div className={styles.productAmountContainer}>
                                        <AddIcon onClick={() => handleIncreaseQuantity(product._id)} />
                                        <input className={styles.productAmountInput} type="number" value={product.quantity} readOnly />
                                        <RemoveIcon onClick={() => handleDecreaseQuantity(product._id)} />
                                    </div>
                                    <div className={styles.productPrice}>
                                        {product.price * product.quantity} DA
                                    </div>
                                </div>
                            </div>
                        ))}
                        <hr className={styles.hr} />
                    </div>
                    <div className={styles.summary}>
                        <h1 className={styles.summaryTitle}>Votre Cammandes</h1>
                        <div className={styles.summaryItem}>
                            <span className={styles.summaryItemText}>Le Subtotal</span>
                            <span className={styles.summaryItemPrice}>{cart.total} DA</span>
                        </div>
                        <select
                            className={styles.shippingSelectionn}
                            value={selectedWilaya}
                            onChange={(e) => setSelectedWilaya(e.target.value)}
                            style={{ backgroundColor: 'white' }}
                        >
                            {wilayaOptions}
                        </select>
                        <div className={styles.shippingSelection}>
                            <label>
                                <input
                                    className={styles.radioInput}
                                    type="radio"
                                    value="desktop"
                                    checked={selectedDeliveryType === 'desktop'}
                                    onChange={handleDeliveryTypeChange}
                                />
                                Stop Desk
                            </label>
                            <label>
                                <input
                                    className={styles.radioInput}
                                    type="radio"
                                    value="home"
                                    checked={selectedDeliveryType === 'home'}
                                    onChange={handleDeliveryTypeChange}
                                />
                                A Domicile
                            </label>
                        </div>
                        <div className={styles.summaryItem}>
                            <span className={styles.summaryItemText}>{`Expédition vers ${String(selectedWilaya).replace(/_/g, ' ')}`}</span>
                            <span className={styles.summaryItemPrice}>{shippingCost} DA</span>
                        </div>
                        <div className={`${styles.summaryItem} ${styles.total}`}>
                            <span className={styles.summaryItemText}>Total</span>
                            <span className={styles.summaryItemPrice}>
                                {cart.total + shippingCost} DA
                            </span>
                        </div>
                        <button className={`${styles.topButton} ${styles.filled}`} onClick={() => setIsOpenPopup(true)}>FINALISER ACHAT</button>
                        {isOpenPopup && <CheckOrder setIsOpenPopup={setIsOpenPopup} selectedDeliveryType={selectedDeliveryType} />}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
      </div>
    );
};

export default Cart;
