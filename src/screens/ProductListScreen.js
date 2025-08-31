import React from "react";
import { View, FlatList } from "react-native";
import ProductCard from "../components/ProductCard";
import products from "../data/products.json";

export default function ProductListScreen({ route }) {
  const { filter } = route.params;

  const filteredProducts = products.filter((p) => {
    let ok = true;
    if (filter.category) ok = ok && p.category === filter.category;
    if (filter.price?.max) ok = ok && p.price <= filter.price.max;
    return ok;
  });

  return (
    <View>
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductCard product={item} />}
      />
    </View>
  );
}
