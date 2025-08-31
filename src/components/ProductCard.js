import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{product.name}</Text>
      <Text>₹{product.price}</Text>
      <Button title="Add to Cart" onPress={() => addToCart(product)} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 10, margin: 10, borderWidth: 1, borderRadius: 8 },
  title: { fontWeight: "bold", fontSize: 16 }
});
