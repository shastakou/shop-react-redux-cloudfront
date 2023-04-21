import { Product } from "~/models/Product";

export type Cart = {
  cartItems: CartItem[];
};

export type CartItem = {
  productId: string;
  count: number;
};

export type CartItemProduct = CartItem & {
  product: Product;
};
