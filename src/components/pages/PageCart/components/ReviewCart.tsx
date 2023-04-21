import Typography from "@mui/material/Typography";
import CartItems from "~/components/CartItems/CartItems";
import { CartItemProduct } from "~/models/CartItem";

type ReviewCartProps = {
  items: CartItemProduct[];
};

export default function ReviewCart({ items }: ReviewCartProps) {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <CartItems items={items} isEditable />
    </>
  );
}
