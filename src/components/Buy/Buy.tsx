import '@/components/Buy/Buy.css';
import moneyIcon from '@/assets/icons/money.svg';

export default function Buy() {
  return (
    <div className="buy-container">
      <div className="buy-icon-container">
        <img className="buy-icon" src={moneyIcon} />
      </div>

      <div className="buy-productName">
        <span>Name</span>
        <span>category</span>
      </div>
      <div className="buy-money">
        <b>-$123</b>
      </div>
    </div>
  );
}
