import axios, { AxiosError } from "axios";
import React from "react";
import { useQuery, useQueryClient, useMutation } from "react-query";
import API_PATHS from "~/constants/apiPaths";
import { Cart, CartItem, CartItemWithProduct } from "~/models/CartItem";
import { Product } from "~/models/Product";

export function useCart() {
  return useQuery<CartItemWithProduct[], AxiosError>("cart", async () => {
    const { data } = await axios.get<Cart>(`${API_PATHS.cart}/profile/cart`, {
      headers: {
        Authorization: `Basic ${localStorage.getItem("authorization_token")}`,
      },
    });

    const items = data.cartItems as CartItemWithProduct[];
    for (const item of items) {
      const product = await axios.get<Product>(
        `${API_PATHS.product}/products/${item.productId}`
      );
      item.product = product.data;
    }

    return items;
  });
}

export function useCartData() {
  const queryClient = useQueryClient();
  return queryClient.getQueryData<CartItem[]>("cart");
}

export function useInvalidateCart() {
  const queryClient = useQueryClient();
  return React.useCallback(
    () => queryClient.invalidateQueries("cart", { exact: true }),
    []
  );
}

export function useUpsertCart() {
  return useMutation((values: CartItem) =>
    axios.put<CartItem[]>(`${API_PATHS.cart}/profile/cart`, values, {
      headers: {
        Authorization: `Basic ${localStorage.getItem("authorization_token")}`,
      },
    })
  );
}
