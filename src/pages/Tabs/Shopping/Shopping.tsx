import '@/pages/Tabs/Shopping/Shopping.css';
import Card, { type ICard } from '@/components/Card/Card';

interface ShoppingProps {
  cards: ICard[];
  addToCart: (id: number) => void;
}

export default function Shopping({ cards, addToCart }: ShoppingProps) {
  return (
    <div className="shopping-container">
      {cards.length > 0 &&
        cards.map((card, index) => {
          return <Card card={card} addToCart={addToCart} key={index} />;
        })}
    </div>
  );
}
