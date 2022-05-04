import colors from "../config/colors";
export const listings = [
  {
    id: "1",
    title: "My Listings",
    path: "MyListings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    id: "2",
    title: "My Messages",
    path: "Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

export const data = {
  id: "1",
  title: "Water Prof Watch",
  price: "$1000",
  image: {
    uri: "https://cdn.vox-cdn.com/thumbor/eTQhbaxDs6MYk3P1i5uMICW_iuM=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22908906/vpavic_211006_4796_0061.jpg",
  },
  owner: {
    name: "Muhammad Usman",
    image: require("../assets/user.png"),
    noOfProducts: 15,
  },
};

export const listing = [
  {
    id: "1",
    title: "First Item",
    price: "$100",
    image: {
      uri: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80",
    },
    owner: {
      name: "Muhammad Usman",
      image: {
        uri: "https://library.kissclipart.com/20180919/xae/kissclipart-male-avatar-icon-clipart-computer-icons-avatar-104635e37f6b2f94.png",
      },
      noOfProducts: 15,
    },
  },
  {
    id: "2",
    title: "Second Item",
    price: "$1000",
    image: {
      uri: "https://cdn.vox-cdn.com/thumbor/eTQhbaxDs6MYk3P1i5uMICW_iuM=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22908906/vpavic_211006_4796_0061.jpg",
    },
    owner: {
      name: "Muhammad Usman",
      image: {
        uri: "https://library.kissclipart.com/20180919/xae/kissclipart-male-avatar-icon-clipart-computer-icons-avatar-104635e37f6b2f94.png",
      },
      noOfProducts: 15,
    },
  },
  {
    id: "3",
    title: "First Item",
    price: "$100",
    image: {
      uri: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80",
    },
    owner: {
      name: "Muhammad Usman",
      image: {
        uri: "https://library.kissclipart.com/20180919/xae/kissclipart-male-avatar-icon-clipart-computer-icons-avatar-104635e37f6b2f94.png",
      },
      noOfProducts: 15,
    },
  },
  {
    id: "4",
    title: "Second Item",
    price: "$1000",
    image: {
      uri: "https://cdn.vox-cdn.com/thumbor/eTQhbaxDs6MYk3P1i5uMICW_iuM=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22908906/vpavic_211006_4796_0061.jpg",
    },
    owner: {
      name: "Muhammad Usman",
      image: {
        uri: "https://library.kissclipart.com/20180919/xae/kissclipart-male-avatar-icon-clipart-computer-icons-avatar-104635e37f6b2f94.png",
      },
      noOfProducts: 15,
    },
  },
];
export const categories = [
  {
    id: "1",
    label: "Furniture",
    backgroundColor: "#DD6E42",
    icon: "table-furniture",
  },
  {
    id: "2",
    label: "Accessories",
    backgroundColor: "#A8C256",
    icon: "cable-data",
  },
  {
    id: "3",
    label: "Clothing",
    backgroundColor: "#C33149",
    icon: "tshirt-crew",
  },
  { id: "4", label: "Watches", backgroundColor: "#C29979", icon: "watch" },
  {
    id: "6",
    label: "Electronics",
    backgroundColor: "#605F5E",
    icon: "toaster-oven",
  },
  { id: "7", label: "Sports", backgroundColor: "#F58F29", icon: "basketball" },
  { id: "8", label: "Books", backgroundColor: "#7D4600", icon: "book-account" },
  { id: "9", label: "Shoes", backgroundColor: "#EEC170", icon: "shoe-formal" },
  {
    id: "11",
    label: "Cosmetics",
    backgroundColor: "#28AFB0",
    icon: "lipstick",
  },
  {
    id: "12",
    label: "Mobile",
    backgroundColor: "#FF715B",
    icon: "cellphone-iphone",
  },
  {
    id: "13",
    label: "Laptops",
    backgroundColor: "#8EA604",
    icon: "laptop-windows",
  },
  {
    id: "14",
    label: "Cameras",
    backgroundColor: "#A57F60",
    icon: "camera-wireless",
  },
];
