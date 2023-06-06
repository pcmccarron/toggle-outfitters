// hooks/useErrorHandling.ts
import { useState } from 'react';
import { useShoppingCart } from 'use-shopping-cart';

const useErrorHandling = () => {
  const [errorState, setErrorState] = useState(false);

  const { clearCart } = useShoppingCart();

  const Trigger = async () => {
    try {
      const response = await fetch(
        // put your flag trigger URL in here using this format: 'http://your-flag-trigger.com', (needs both the comma and quotes)   
        {
          method: "POST",
          body: JSON.stringify({
            eventName: "There was an error with the API",
          }),
        }
      );
      return response.status;
    } catch (error) {
      console.log("the fetch did not work");
    }
  };

  const errorTesting = async () => {
    try {
      const response = await fetch("/api/checkout", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const jsonData = await response.json();
      if (jsonData == "the API is unreachable") {
        setErrorState(true);
         clearCart()
         Trigger()
        return 502;
      } else {
        setErrorState(false);
      }
    } catch (e) {
      console.log("is it running?");
      console.log(e)
    }
  };

  return { errorState, setErrorState, errorTesting };
};

export default useErrorHandling;