import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import React, { useRef } from "react";
import ImageInput from "./ImageInput";

const ImageInputList = ({
  imageUris = [],
  onRemoveImage,
  onAddImage,
  limit = 10,
}) => {
  const scrollView = useRef();

  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() =>
          scrollView.current.scrollToEnd({ animated: true })
        }
      >
        <View style={styles.container}>
          {imageUris.map((imageUri, index) => {
            return (
              <View key={index} style={styles.image}>
                <ImageInput
                  imageUri={imageUri}
                  onChangeImage={() => onRemoveImage(imageUri)}
                />
              </View>
            );
          })}
          {imageUris.length < limit && (
            <ImageInput
              onChangeImage={(uri) => {
                console.log(uri, "Image Input");
                onAddImage(uri);
              }}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default ImageInputList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});
