import '@/components/Card/Card.css';
import cartIcon from '@/assets/icons/cart.svg';
import cardIcon from '@/assets/icons/book.svg';

export interface ICard {
  id: number;
  price: string;
  cardName: string;
  isAdded: boolean;
}

export type CardProps = {
  card: ICard;
  addToCart: (id: number) => void;
};

export default function Card({ card, addToCart }: CardProps) {
  const cardClass = card.isAdded
    ? 'card-container card-violet-background'
    : 'card-container card-orange-background';

  return (
    <div className={cardClass}>
      <img
        className="cart-icon"
        src={cartIcon}
        onClick={() => addToCart(card.id)}
      />
      <img className="card-icon" src={cardIcon} />
      <div className="card-price">{card.price}</div>
      <div className="card-name">{card.cardName}</div>
    </div>
  );
}
