import Card from "./components/card";

const CARD_DATA = {
  image: "/public/assets/images/illustration-article.svg",
  published: "21 December 2023",
  title: "HTML & CSS foundations",
  description: 'These languages are backbone for every website, defining structure, content and presentation',
  author: {
    avatar: "/public/assets/images/image-avatar.webp",
    name: "Michelle Appleton"
  }
};

function App() {
  return (
    <div className="flex w-screen h-screen items-center justify-center bg-primary">
      <Card cardData={CARD_DATA} />
    </div>
  );
}

export default App;
