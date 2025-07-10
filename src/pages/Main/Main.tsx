import Menu from '@/components/Menu/Menu';
import Header from '@/components/Header/Header';
import Content from '@/components/Content/Content';
import { type ActiveTab } from '@/App';
import { type ICard } from '@/components/Card/Card';
import styles from '@/pages/Main/Main.module.css';

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
    <div className={styles.mainWindow}>
      <div className={styles.mainContainer}>
        <Menu changeActiveTab={changeActiveTab} activeTab={activeTab} />
        <div className={styles.mainContent}>
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
