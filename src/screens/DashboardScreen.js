import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import VoiceButton from "../components/VoiceButton";
import { parseQuery } from "../services/nlp";

export default function DashboardScreen({ navigation }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    const parsed = parseQuery(query);
    navigation.navigate("Products", { filter: parsed });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search products..."
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Search" onPress={handleSearch} />
      <VoiceButton onResult={(text) => setQuery(text)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  input: { borderWidth: 1, padding: 10, marginBottom: 10 }
});
