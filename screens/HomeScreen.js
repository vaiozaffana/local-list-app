import React, { useState } from "react";
import {
  View,
  FlatList,
  Button,
  Modal,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Text,
} from "react-native";
import items from "../data/items";
import HomeCard from "../components/HomeCard";
import FilterModal from "../components/FilterModal";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigation = useNavigation();

  const filteredItems = items
    .filter((item) =>
      selectedCategory ? item.category === selectedCategory : true
    )
    .filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const toggleModal = () => setIsModalVisible(!isModalVisible);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    toggleModal();
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.button} onPress={toggleModal}>
          <Image
            source={require("../assets/images/filter.png")}
            style={styles.filterIcon}
          />
        </TouchableOpacity>

        <TextInput
          style={styles.searchInput}
          placeholder="Pencarian..."
          value={searchQuery}
          onChangeText={handleSearch}
          maxLength={50}
        />
      </View>

      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <HomeCard
            item={item}
            onPress={() =>
              navigation.navigate("Detail", {
                id: item.id,
                title: item.title,
                description: item.description,
                image: item.image,
              })
            }
          />
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Image
              source={require("../assets/images/404-page-not-found-nobg.png")}
              style={styles.emptyImage}
            />
            <Text style={styles.emptyText}>No items found</Text>
          </View>
        }
      />

      <FilterModal
        visible={isModalVisible}
        categories={[...new Set(items.map((item) => item.category))]}
        onSelectCategory={handleSelectCategory}
        onClose={toggleModal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 95,
    marginLeft: 10,
    marginBottom: 10,
    textAlign: "left"
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: "#1E90FF",
    width: 40,
    borderRadius: 5,
    marginBottom: 10,
  },
  filterIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 20,
    height: 20,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  emptyImage: {
    width: 300,
    height: 300,
    marginBottom: 10,
  },
  emptyText: {
    fontSize: 16,
    color: "#999",
  },
});

export default HomeScreen;
