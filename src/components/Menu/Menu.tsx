import '@/components/Menu/Menu.css';
import homeIcon from '@/assets/icons/home.svg';
import shoppingIcon from '@/assets/icons/shopping.svg';
import statisticsIcon from '@/assets/icons/statistics.svg';
import signOutIcon from '@/assets/icons/signout.svg';
import { ActiveTab } from '@/pages/Main/Main';

type MenuProps = {
  changeActiveTab: (activeTab: ActiveTab) => void;
  activeTab: ActiveTab;
};

export default function Menu({ changeActiveTab, activeTab }: MenuProps) {
  return (
    <div className="menu-container">
      <div className="menu-items">
        <div
          className={`menu-item ${
            activeTab === 'home' ? 'menu-item-active' : ''
          }`}
          onClick={() => changeActiveTab('home')}
        >
          <img className="menu-item-icon" src={homeIcon} alt="menu-item-icon" />
        </div>

        <div
          className={`menu-item ${
            activeTab === 'shopping' ? 'menu-item-active' : ''
          }`}
          onClick={() => changeActiveTab('shopping')}
        >
          <img
            className="menu-item-icon"
            src={shoppingIcon}
            alt="menu-item-icon"
          />
        </div>
        <div
          className={`menu-item ${
            activeTab === 'statistics' ? 'menu-item-active' : ''
          }`}
          onClick={() => changeActiveTab('statistics')}
        >
          <img
            className="menu-item-icon"
            src={statisticsIcon}
            alt="menu-item-icon"
          />
        </div>
      </div>
      <div className="menu-item">
        <img
          className="menu-item-icon"
          src={signOutIcon}
          alt="menu-item-icon"
        />
      </div>
    </div>
  );
}
