import { useState } from "react";
import { placeOrder } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { Close, Person, Phone, Room } from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { Button } from '@mui/material';

interface CheckOrderProps {
  setIsOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
  selectedDeliveryType: string;
}

interface OrderData {
    userId: string; 
    clientName: string;
    clientNumber: string;
    clientAddress: string;
    price: number;
    products: {
      productId: string;
      quantity: number;
      image: string;
    }[];
    deliveryType: string;
  }

const CheckOrder: React.FC<CheckOrderProps> = ({ setIsOpenPopup, selectedDeliveryType }) => {
  const [clientName, setClientName] = useState("");
  const [clientNumber, setClientNumber] = useState("");
  const [clientAddress, setClientAddress] = useState(""); 

  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const totalPrice = cart.products.reduce((total: number, product: { quantity: number; price: number; }) => {
      return total + product.quantity * product.price;
    }, 0);
  
    try {
      const orderData: OrderData = {
          clientName,
          clientNumber,
          clientAddress,
          price: totalPrice,
          products: cart.products.map((product: { _id: any; quantity: any; img: any; }) => ({
              productId: product._id,
              quantity: product.quantity,
              image: product.img,
          })),
          deliveryType: selectedDeliveryType,
          userId: ""
      };
  
      const response = await placeOrder(dispatch, orderData);
    } catch (error) {
      console.error("Error placing the order:", error);
    }
  };
  

  function renderCheckoutOrFillCart() {
    if (!cart.products || cart.products.length > 0) {
      return (
        <form className="form">
          <TextField
            placeholder="Votre nom complet"
            onChange={(e) => setClientName(e.target.value)}
            className="input-1"
            type="text"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person />
                </InputAdornment>
              ),
            }} />
          <TextField
            placeholder="Ton Numéro de téléphone"
            onChange={(e) => setClientNumber(e.target.value)}
            className="input-1"
            type="text"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Phone />
                </InputAdornment>
              ),
            }} />
          <TextField
            placeholder="Votre Adresse"
            onChange={(e) => setClientAddress(e.target.value)}
            className="input-1"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Room />
                </InputAdornment>
              ),
            }} />
        <Button variant="contained" color="primary" className="button-1" onClick={handleClick}>
        Passer la commande
        </Button>
        </form>
      );
    } else {
        return <div className='empty'>Panier vide📭, Merci d&apos;être ici😊.</div>;
    }
  }

  return (
    <div
      onClick={() => setIsOpenPopup(false)}
      style={{
        position: "fixed",
        background: "rgba(0,0,0,0.6)",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          borderRadius: "8px",
          width: "450px",
          height: '400px',
          padding: "20px 10px",
          animation: "dropTop .3s linear",
        }}
      >
        {renderCheckoutOrFillCart()}
        <div
          onClick={() => setIsOpenPopup(false)}
          style={{
            cursor: "pointer",
            position: "absolute",
            top: 105,
            right: 15,
          }}
        >
          <Close style={{ color: 'red', fontWeight: 'bold', fontSize: '30px' }} />
        </div>
      </div>
    </div>
  );
};

export default CheckOrder;
