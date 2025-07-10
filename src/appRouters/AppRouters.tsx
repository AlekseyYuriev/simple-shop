import { Route, Routes } from 'react-router';
import Overview from '@/pages/Overview/Overview';
import Authorization from '@/pages/Authorization/Authorization';
import Main from '@/pages/Main/Main';
import { ActiveTab } from '@/App';
import { ICard } from '@/components/Card/Card';

interface AppRoutersProps {
  isSignIn: boolean;
  toggleForm: () => void;
  activeTab: ActiveTab;
  changeActiveTab: (tab: ActiveTab) => void;
  cash: number;
  currentDate: Date;
  cards: ICard[];
  addToCart: (id: number) => void;
  buyCards: ICard[];
}

export default function AppRouters({
  isSignIn,
  toggleForm,
  activeTab,
  changeActiveTab,
  cash,
  currentDate,
  cards,
  addToCart,
  buyCards,
}: AppRoutersProps) {
  return (
    <Routes>
      <Route path="/" element={<Overview />} />
      <Route
        path="auth/:isRegistration"
        element={<Authorization isSignIn={isSignIn} toggleForm={toggleForm} />}
      />
      <Route
        path="main"
        element={
          <Main
            activeTab={activeTab}
            changeActiveTab={changeActiveTab}
            cash={cash}
            currentDate={currentDate}
            cards={cards}
            addToCart={addToCart}
            buyCards={buyCards}
          />
        }
      />
    </Routes>
  );
}
