import AppReady from "@/components/AppReady";
import store from "@/redux/store";
import "@/styles/globals.scss";
import { colors } from "@/utils/colors";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

export default function App({ Component, pageProps }) {
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  const initialOptions = {
    "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
    currency: "USD",
    intent: "subscription",
    vault: true,
    components: "buttons",
  };
  const theme = extendTheme({
    fonts: {
      heading: "Oxanium",
      body: "Oxanium",
    },
    styles: {
      global: {
        "html, body": {
          WebkitUserSelect: "none",
        },
        body: {
          background: "#040C3A",
          color: colors.whiteText,
        },
      },
    },
    config: {
      initialColorMode: "red",
      useSystemColorMode: false,
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <PayPalScriptProvider sx={{ color: "white" }} options={initialOptions}>
          <Elements stripe={stripePromise}>
            <AppReady>
              <Component {...pageProps} />
            </AppReady>
          </Elements>
        </PayPalScriptProvider>
      </Provider>
    </ChakraProvider>
  );
}
