import { useStripe, useElements } from "@stripe/react-stripe-js";
import { Button, Spinner, Box } from "@chakra-ui/react";
import { useState } from "react";

function CheckoutButton({ planId, term, saveMap, shareMap }) {
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);

  const packageType = Number(planId)  // 1 2 3 4
  const payPlan = Number(term); // 1 2 3 
  const savemap = Number(saveMap) == 1? true : false; // 1 false 2 true
  const sharemap = Number(shareMap); // 1: 0 map ; 2: 10; 3: 20; 4: 100
  const token = localStorage.getItem('base_acccess_token');
  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/subscriptionWithStripe/create-checkout-session`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            packageType: packageType,
            payPlan: payPlan,
            saveMap: savemap,
            shareMap: sharemap,
          }),
        }
      );


    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const sessionData = await response.json();
    const { url } = sessionData;
    window.location.href = url;
    
  } catch (error) {
    console.error("Error creating checkout session:", error);
  } finally {
    setLoading(false);
  }
};

  return (
    <>
      {loading ? (
        <Button 
        colorScheme="purple"
        width="full">
          <Spinner size="sm" mr={2} />
          <span>Loading...</span>
        </Button>
      ) : (
        <Button
          colorScheme="purple"
          width="full"
          onClick={handleCheckout}
          disabled={!stripe || !elements}
        >
          Continue
        </Button>
      )}
    </>
  );
}

export default CheckoutButton;
