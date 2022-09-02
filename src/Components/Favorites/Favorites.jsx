import React, { useContext, useEffect } from "react";
import { favoritesContext } from "../../context/FavoritesContextProvider";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import check from "../../image/checkMark.png";
import icon1 from "../../image/busd.svg";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { checkProductInCart } from "../../helpers/cartFunctions";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

const Favorites = () => {
  const { favorites, getFavorites } = useContext(favoritesContext);

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <div className="container">
      {favorites.products &&
        favorites.products.map((elem) => (
          <div key={elem.item.id} className="card">
            <div className="card">
              <Card key="45" sx={{ maxWidth: 300 }}>
                <Link to={`/nftDetails/${elem.item.id}`}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="auto"
                    src={elem.item.img}
                  />
                </Link>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {elem.item.title}
                  </Typography>
                  <div className="text__person">{elem.item.owner}</div>
                  <div className="person__price">
                    <span>Стоимость</span>
                    <div className="person__price_left">
                      <div className="person__price_down">
                        <span>{elem.item.price} руб.</span>
                        <div style={{ textDecoration: "line-through" }}>
                          {elem.item.price * 1.5} руб.{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardActions
                  style={{ display: "flex", justifyContent: "space-between" }}
                ></CardActions>
              </Card>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Favorites;
