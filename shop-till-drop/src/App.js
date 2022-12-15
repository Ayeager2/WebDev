import Directory from "./components/directory/directory.component";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      subtitle: "Show Now",
    },
    {
      id: 2,
      title: "Jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      subtitle: "Show Now",
    },
    {
      id: 3,
      title: "Sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      subtitle: "Show Now",
    },
    {
      id: 4,
      title: "Womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      subtitle: "Show Now",
    },
    {
      id: 5,
      title: "Mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      subtitle: "Show Now",
    },
  ];
  return <Directory categories={categories} />;
};

export default App;
