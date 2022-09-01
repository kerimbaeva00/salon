import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./AddNFT.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { nftContext } from "../../context/NFTContextProvider";
import MenuItem from "@mui/material/MenuItem";
import { InputLabel, Select } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import showToast from "../../helpers/ShowToast";

export default function AddNFT() {
  let { addProduct } = useContext(nftContext);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [creator, setCreator] = useState("");
  const [owner, setOwner] = useState("");
  const [category, setCategory] = useState("");

  let navigate = useNavigate();

  function handleClick() {
    if (!title || !price || !img || !creator || !owner || !category) {
      showToast("Заполните поля", "error");
      return;
    }

    let product = {
      title,
      price: +price,
      img,
      creator,
      owner,
      category,
    };

    addProduct(product);
    navigate("/");
  }

  return (
    <div className="addProduct">
      <div className="us-text">Add Nft</div>
      <TextField
        sx={{ width: 300 }}
        id="outlined-basic"
        label="Услуга"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        sx={{ width: 300 }}
        type="number"
        id="outlined-basic"
        label="Цена"
        variant="outlined"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <TextField
        sx={{ width: 300 }}
        id="outlined-basic"
        label="Фотография"
        variant="outlined"
        value={img}
        onChange={(e) => setImg(e.target.value)}
      />
      <TextField
        sx={{ width: 300 }}
        id="outlined-basic"
        label="Мастер"
        variant="outlined"
        value={creator}
        onChange={(e) => setCreator(e.target.value)}
      />
      <TextField
        sx={{ width: 300 }}
        id="outlined-basic"
        label="Description"
        variant="outlined"
        value={owner}
        onChange={(e) => setOwner(e.target.value)}
      />
      <FormControl fullWidth sx={{ width: 300 }}>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Category"
          onChange={(e) => setCategory(e.target.value)}
        >
          <MenuItem value={"Парикмахерские услуги"}>
            Парикмахерские услуги
          </MenuItem>
          <MenuItem value={"Ногтевой сервис"}>Ногтевой сервис</MenuItem>
          <MenuItem value={"Визаж"}>Визаж</MenuItem>
          <MenuItem value={"Лазерная эпиляция"}>Лазерная эпиляция</MenuItem>
          <MenuItem value={"Солярий"}>Солярий</MenuItem>
        </Select>
      </FormControl>
      <Button onClick={handleClick} variant="contained" disableElevation>
        Add NFT
      </Button>
    </div>
  );
}
