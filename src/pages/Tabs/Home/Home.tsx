import '@/pages/Tabs/Home/Home.css';
import Purchases from '@/components/Purchases/Purchases';
import Card, { type ICard } from '@/components/Card/Card';

interface HomeProps {
  buyCards: ICard[];
  addToCart: (id: number) => void;
}

export default function Home({ buyCards, addToCart }: HomeProps) {
  return (
    <div className="home-container">
      <Purchases />
      <div className="home-container-cards">
        {buyCards.length > 0 &&
          buyCards.map((card, index) => {
            return <Card card={card} addToCart={addToCart} key={index} />;
          })}
      </div>
    </div>
  );
}
