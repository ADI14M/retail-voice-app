import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { CartContext } from "../context/CartContext";

export default function CheckoutScreen({ navigation }) {
  const { cart, clearCart, total } = useContext(CartContext);

  const placeOrder = () => {
    // TODO: Save order to Firebase
    clearCart();
    navigation.navigate("Track Order", { orderId: "123" });
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Placing Order...</Text>
      <Text>Total Amount: ₹{total}</Text>
      <Button title="Confirm Order" onPress={placeOrder} />
    </View>
  );
}
