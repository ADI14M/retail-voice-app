import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";

export default function OrderTrackingScreen() {
  const [orderId, setOrderId] = useState("");
  const [status, setStatus] = useState("");

  const trackOrder = () => {
    if (orderId === "123") {
      setStatus("Your order is Out for Delivery 🚚");
    } else {
      setStatus("Order not found");
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        placeholder="Enter Order ID"
        value={orderId}
        onChangeText={setOrderId}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <Button title="Track" onPress={trackOrder} />
      {status ? <Text style={{ marginTop: 20 }}>{status}</Text> : null}
    </View>
  );
}
