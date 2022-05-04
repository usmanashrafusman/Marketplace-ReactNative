import React, { useState } from "react";
import { FlatList } from "react-native";
import {
  Screen,
  ListItem,
  ListItemSeparator,
  ListItemDeleteAction,
} from "../componenets/layouts";

const initialMessages = [
  {
    id: "1",
    title: "First Item",
    description: "This is the First item",
    image: require("../assets/user.png"),
  },
  {
    id: "2",
    title: "Second Item",
    description: "This is the Second item",
    image: require("../assets/user.png"),
  },
  {
    id: "3",
    title: "Third Item",
    description: "This is the Third item",
    image: require("../assets/user.png"),
  },
];
const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        renderItem={({ item }) => {
          return (
            <ListItem
              title={item.title}
              subTitle={item.description}
              image={item.image}
              onPress={() => {
                console.log("Item Pressed");
              }}
              renderRightActions={() => {
                return (
                  <ListItemDeleteAction onPress={() => handleDelete(item)} />
                );
              }}
            />
          );
        }}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: "1",
              title: "First Item",
              description: "This is the first item",
              image: require("../assets/user.png"),
            },
          ]);
        }}
      />
    </Screen>
  );
};

export default MessagesScreen;
