import Buy from '@/components/Buy/Buy';
import BankCard from '@/components/BankCard/BankCard';
import '@/components/Purchases/Purchases.css';

export default function Purchases() {
  return (
    <div className="purchases-container">
      <div>
        <Buy />
      </div>
      <BankCard />
    </div>
  );
}
