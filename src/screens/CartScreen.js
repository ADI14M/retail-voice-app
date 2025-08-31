import React, { useContext } from "react";
import { View, Text, Button, FlatList } from "react-native";
import { CartContext } from "../context/CartContext";

export default function CartScreen({ navigation }) {
  const { cart, removeFromCart, total } = useContext(CartContext);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }}>
            <Text>{item.name} - ₹{item.price}</Text>
            <Button title="Remove" onPress={() => removeFromCart(item.id)} />
          </View>
        )}
      />
      <Text style={{ fontWeight: "bold", fontSize: 16 }}>Total: ₹{total}</Text>
      <Button title="Checkout" onPress={() => navigation.navigate("Checkout")} />
    </View>
  );
}
