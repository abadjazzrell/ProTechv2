import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import Rating from "./Rating";
import axios from "axios";
import { useContext, useState } from "react";
import { Store } from "../Store";

function Product(props) {
  const { product } = props;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
    userInfo,
  } = state;

  const isAdmin = userInfo?.isAdmin;

  const [countInStock, setCountInStock] = useState(product.countInStock);

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert(`Sorry. Product is out of stock`);

      return;
    }

    const payload = {
      ...item,
      quantity,
      countInStock: data.countInStock - quantity, // decrement countInStock
    };

    setCountInStock(payload.countInStock);

    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload,
    });
  };

  return (
    <>
      {isAdmin || product.isActive ? (
        <Card>
          <Link to={`/product/${product.slug}`}>
            <img
              src={product.image}
              className='card-img-top'
              alt={product.name}
            />
          </Link>
          <Card.Body>
            <Link to={`/product/${product.slug}`}>
              <Card.Title>{product.name}</Card.Title>
            </Link>
            <Rating rating={product.rating} numReviews={product.numReviews} />

            <Card.Text>${product.price}</Card.Text>

            {countInStock === 0 ? (
              <Button variant='light' disabled>
                Out of stock
              </Button>
            ) : (
              <Button onClick={() => addToCartHandler(product)}>
                Add to cart
              </Button>
            )}
          </Card.Body>
        </Card>
      ) : null}
    </>
  );
}

export default Product;
