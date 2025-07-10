import '@/pages/Main/Main.css';
import Menu from '@/components/Menu/Menu';
import Header from '@/components/Header/Header';
import Content from '@/components/Content/Content';
import { type ActiveTab } from '@/App';
import { type ICard } from '@/components/Card/Card';

interface MainProps {
  activeTab: ActiveTab;
  changeActiveTab: (tab: ActiveTab) => void;
  cash: number;
  currentDate: Date;
  cards: ICard[];
  addToCart: (id: number) => void;
  buyCards: ICard[];
}

const Main = ({
  activeTab,
  changeActiveTab,
  cash,
  currentDate,
  cards,
  addToCart,
  buyCards,
}: MainProps) => {
  return (
    <div className="main-window">
      <div className="main-container">
        <Menu changeActiveTab={changeActiveTab} activeTab={activeTab} />
        <div className="main-content">
          <Header cash={cash} currentDate={currentDate} />
          <Content
            activeTab={activeTab}
            cards={cards}
            addToCart={addToCart}
            buyCards={buyCards}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
