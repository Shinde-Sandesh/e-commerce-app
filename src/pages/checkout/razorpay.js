import { toast } from "react-toastify";
import mainImg from '../../assets/favicon-new.png'

const loadScript = async (url) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = url;

    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);

    document.body.appendChild(script);
  });
};

export const displayRazorpay = async (amount, cart, setOrder) => {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!res) {
    toast.error("Razorpay SDK failed to load, check your connection.");
    return;
  }

  const options = {
    key: "rzp_test_Y8aGArQBtqiQ11", 
    amount: amount * 100,
    currency: "INR",
    name: "Sports Cart",
    description: "Thank you for shopping with us",
    image: mainImg,
    handler: function (response) {
      const orderData = {
        products: cart,
        amount: amount,
        paymentId: response.razorpay_payment_id,
      };
      setOrder(orderData);
      toast.success("Order placed successfully!");
    },
    prefill: {
      contact: "1234567890",
    },
    theme: {
      color: "#92c9ef",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};

