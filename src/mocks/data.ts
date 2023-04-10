import { OrderStatus } from "~/constants/order";
import { CartItemProduct } from "~/models/CartItem";
import { Order } from "~/models/Order";
import { AvailableProduct, Product } from "~/models/Product";

export const products: Product[] = [
  {
    description: "Short Product Description1",
    id: "f8ab571f-7c29-4902-a59e-fc2d066957e5",
    price: 24,
    title: "ProductOne",
  },
  {
    description: "Short Product Description7",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80a1",
    price: 15,
    title: "ProductTitle",
  },
  {
    description: "Short Product Description2",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80a3",
    price: 23,
    title: "Product",
  },
  {
    description: "Short Product Description4",
    id: "7567ec4b-b10c-48c5-9345-fc73348a80a1",
    price: 15,
    title: "ProductTest",
  },
  {
    description: "Short Product Descriptio1",
    id: "7567ec4b-b10c-48c5-9445-fc73c48a80a2",
    price: 23,
    title: "Product2",
  },
  {
    description: "Short Product Description7",
    id: "7567ec4b-b10c-45c5-9345-fc73c48a80a1",
    price: 15,
    title: "ProductName",
  },
];

export const availableProducts: AvailableProduct[] = products.map(
  (product, index) => ({ ...product, count: index + 1 })
);

export const cart: CartItemProduct[] = [
  {
    productId: "f8ab571f-7c29-4902-a59e-fc2d066957e5",
    product: {
      description: "Short Product Description1",
      id: "f8ab571f-7c29-4902-a59e-fc2d066957e5",
      price: 24,
      title: "ProductOne",
    },
    count: 2,
  },
  {
    productId: "7567ec4b-b10c-45c5-9345-fc73c48a80a1",
    product: {
      description: "Short Product Description7",
      id: "7567ec4b-b10c-45c5-9345-fc73c48a80a1",
      price: 15,
      title: "ProductName",
    },
    count: 5,
  },
];

export const orders: Order[] = [
  {
    id: "1",
    address: {
      address: "some address",
      firstName: "Name",
      lastName: "Surname",
      comment: "",
    },
    items: [
      {
        productId: "f8ab571f-7c29-4902-a59e-fc2d066957e5",
        count: 2,
        price: 100,
      },
      {
        productId: "7567ec4b-b10c-45c5-9345-fc73c48a80a1",
        count: 5,
        price: 200,
      },
    ],
    statusHistory: [
      { status: OrderStatus.Open, timestamp: Date.now(), comment: "New order" },
    ],
  },
  {
    id: "2",
    address: {
      address: "another address",
      firstName: "John",
      lastName: "Doe",
      comment: "Ship fast!",
    },
    items: [
      {
        productId: "f8ab571f-7c29-4902-a59e-fc2d066957e5",
        count: 3,
        price: 100,
      },
    ],
    statusHistory: [
      {
        status: OrderStatus.Sent,
        timestamp: Date.now(),
        comment: "Fancy order",
      },
    ],
  },
];
