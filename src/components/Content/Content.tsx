import { motion, AnimatePresence } from 'framer-motion';
import Home from '@/pages/Tabs/Home/Home';
import Shopping from '@/pages/Tabs/Shopping/Shopping';
import Statistics from '@/pages/Tabs/Statistics/Statistics';
import { type ICard } from '../Card/Card';
import { type ActiveTab } from '@/App';
import '@/components/Content/Content.css';

type ContentProps = {
  activeTab: ActiveTab;
  cards: ICard[];
  addToCart: (id: number) => void;
  buyCards: ICard[];
};

export default function Content({
  activeTab,
  cards,
  addToCart,
  buyCards,
}: ContentProps) {
  const variants = {
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeTab}
        variants={variants}
        initial="exit"
        animate="enter"
        exit="exit"
        transition={{ duration: 0.3 }}
        className="content-container"
      >
        {activeTab === 'home' && (
          <Home buyCards={buyCards} addToCart={addToCart} />
        )}
        {activeTab === 'shopping' && (
          <Shopping cards={cards} addToCart={addToCart} />
        )}
        {activeTab === 'statistics' && <Statistics />}
      </motion.div>
    </AnimatePresence>
  );
}
