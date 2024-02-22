import { useState } from "react";
import "./newProduct.css";
import { addProduct } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import FileBase64 from 'react-file-base64';
import { useNavigate } from 'react-router-dom';
import imageCompression from 'browser-image-compression'; 



export default function NewProduct() {



  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [inStock, setStock] = useState("");
  const [img, setImg] = useState("");
  const [imgs, setImgs] = useState([]);
  const [categories, setCat] = useState([]);
  const [details, setDetails] = useState([]);
  const [not, setNot] = useState(null);
  const [titleInput, setTitleInput] = useState('');
  
  
  const dispatch = useDispatch();
  const navigate = useNavigate();



  const handleClick = (e) => {
    e.preventDefault();
    addProduct(dispatch, { title, desc, price, inStock: parseInt(inStock), img,imgs, categories, detail: details });
    setNot('Product Added successfully');
    setTimeout(() => {
      setNot(null);
      navigate('/');
    }, 3000);
  };



  const handleImgChange = async (file) => {
    try {
      const options = {
        maxSizeMB: 0.5, 
        maxWidthOrHeight: 800,
        useWebWorker: true,
        quality: 0.8, 

      };
      
      const compressedFile = await imageCompression(file.file, options);
  
      const reader = new FileReader();
      reader.readAsDataURL(compressedFile);
      reader.onloadend = () => {
        setImg(reader.result);
      };
    } catch (error) {
      console.error("Error compressing image:", error);
    }
  };


  const handleMultipleImgChange = async (files) => {
    try {
      const options = {
        maxSizeMB: 0.5,
        maxWidthOrHeight: 800,
        useWebWorker: true,
        quality: 0.8,
      };
  
      const compressedFiles = await Promise.all(files.map(async (file) => {
        const compressedFile = await imageCompression(file.file, options);
        return compressedFile;
      }));
  
      const readers = compressedFiles.map((compressedFile) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(compressedFile);
          reader.onloadend = () => {
            resolve(reader.result);
          };
          reader.onerror = (error) => {
            reject(error);
          };
        });
      });
  
      Promise.all(readers).then((results) => {
        setImgs(results);
      });
    } catch (error) {
      console.error("Error compressing images:", error);
    }
  };

  const addDetail = () => {
    const separatorIndex = titleInput.indexOf(':');
  
    if (separatorIndex !== -1) {
      const title = titleInput.substring(0, separatorIndex).trim();
      const description = titleInput.substring(separatorIndex + 1).trim();
  
      if (title !== '' && description !== '') {
        const newDetail = `${title}: ${description}`;
        setDetails([...details, newDetail]);
        setTitleInput('');
      }
    }
  };
  
  
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setTitleInput(inputValue);
  };

  return (
    <div className="newProduct">
      {not && (
        <div className="customNotification">
          {not}
        </div>
      )}
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
        <div style={{ paddingTop: "200px" }}>
          <label>Main Image</label>
          <FileBase64
            multiple={false}
            onDone={handleImgChange}
          />
          {img && <img src={img} alt="Product" style={{ maxWidth: "100px", maxHeight: "100px"  }} />}
          </div>
          <div style={{ paddingTop: "50px" }}>
          <label>Side Images</label>
          <FileBase64
            multiple={true}
            onDone={handleMultipleImgChange} 
          />
            {imgs && imgs.map((imgData, index) => (
              <img key={index} src={imgData} alt={`Product ${index}`} style={{ maxWidth: "50px", maxHeight: "50px", marginRight: "10px" }} />
            ))}
          </div>
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            name="title"
            type="text"
            placeholder="Apple Airpods"
            onChange={(e) => setTitle(e.target.value)} 
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            name="desc"
            type="text"
            placeholder="description..."
            onChange={(e) => setDesc(e.target.value)} 
          />
        </div>
        <div className="addProductItem">
          <label>Details</label>
          <div>
            <input
              type="text"
              placeholder="Title: Description..."
              value={titleInput}
              onChange={handleInputChange}
            />
            <button type="button" onClick={addDetail}>Add</button>
          </div>
          <ul>
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input
            name="price"
            type="number"
            placeholder="100"
            onChange={(e) => setPrice(e.target.value)} 
          />
        </div>
        <div className="addProductItem">
          <label>Categories</label>
          <select onChange={(e) => setCat(e.target.value)}>
            <option value="">Select category...</option>
            <option value="electromenager">Electromenager</option>
            <option value="informatique">Informatique</option>
            <option value="cosmetique">Cosmetique</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input
            name="inStock"
            type="number"
            placeholder="Enter stock quantity"
            value={inStock}
            onChange={(e) => setStock(e.target.value)}
          />
        </div>
        <button onClick={handleClick} className="addProductButton">
          Create
        </button>
      </form>
    </div>
  );
}
