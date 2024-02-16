import Card from "./components/card";

const CARD_DATA = {
  image: "/public/assets/images/illustration-article.svg",
};

function App() {
  return (
    <div className="flex w-screen h-screen items-center justify-center bg-primary">
      <Card cardData={CARD_DATA} />
    </div>
  );
}

export default App;
