import Card from "./components/card";

const CARD_DATA = {
  image: "assets/images/illustration-article.svg",
  published: "21 December 2023",
  title: "HTML & CSS foundations",
  description:
    "These languages are backbone for every website, defining structure, content and presentation",
  author: {
    avatar: "/assets/images/image-avatar.webp",
    name: "Greg Hooper",
  },
};

function App() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-primary font-card">
      <Card cardData={CARD_DATA} />
    </div>
  );
}

export default App;
