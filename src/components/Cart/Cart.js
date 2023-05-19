import Card from "../UI/Card";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cardItems = useSelector((state) => state.cart.items);
  return (
    <Card className="cart">
      <h2>Your Shopping Cart</h2>
      <ul>
        {cardItems.map((card) => (
          <CartItem
            key={card.id}
            item={{id:card.id, title: card.title, quantity: card.quantity, total: card.totalPrice, price: card.price }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
