export const priceCalc = (cartItems) => {
  const initialPrices = { price: 0, checkoutPrice: 0 };

  const { price, checkoutPrice } = cartItems.reduce(
    (acc, next) => ({
      price: acc.price + next.price * next.qty,
      checkoutPrice: acc.checkoutPrice + next.discount * next.qty,
    }),
    initialPrices
  );

  return { price, checkoutPrice };
};
