import { useMemo, useState } from 'react';
import { BrowserRouter } from 'react-router';
import { ThemeProvider } from 'styled-components';
import AppRouters from './appRouters/AppRouters';
import { type ICard } from '@/components/Card/Card';
import '@/App.css';

export type ActiveTab = 'home' | 'shopping' | 'statistics';

function App() {
  const cash = 19542;
  const currentDate = new Date();

  const initialCards: ICard[] = [
    { id: 1, price: 'Book', cardName: '10.1', isAdded: false },
    { id: 2, price: 'Phone', cardName: '220.1', isAdded: false },
    { id: 3, price: 'Notebook', cardName: '4220.1', isAdded: false },
  ];

  const [activeTab, setActiveTab] = useState<ActiveTab>('shopping');
  const [cards, setCards] = useState<ICard[]>(initialCards);
  const [isSignIn, setIsSignIn] = useState<boolean>(true);

  const buyCards = useMemo<ICard[]>(() => getAddedCards(cards), [cards]);

  const changeActiveTab = (activeTab: ActiveTab) => {
    setActiveTab(activeTab);
  };

  const addToCart = (id: number) => {
    setCards((currentCards) =>
      currentCards.map((card) =>
        card.id === id ? { ...card, isAdded: !card.isAdded } : card
      )
    );
  };

  function getAddedCards(cards: ICard[]): ICard[] {
    const addedCards = cards.filter((card) => card.isAdded);
    return addedCards;
  }

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <BrowserRouter>
      <ThemeProvider
        theme={{
          isDarkTheme: false,
        }}
      >
        <div className="app-window-container">
          <AppRouters
            isSignIn={isSignIn}
            toggleForm={toggleForm}
            activeTab={activeTab}
            changeActiveTab={changeActiveTab}
            cash={cash}
            currentDate={currentDate}
            cards={cards}
            addToCart={addToCart}
            buyCards={buyCards}
          />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
