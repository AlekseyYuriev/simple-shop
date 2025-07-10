import '@/components/BankCard/BankCard.css';
import masterCardIcon from '@/assets/icons/mastercard.svg';
import qrCodeIcon from '@/assets/icons/qrcode.svg';

export default function BankCard() {
  return (
    <div className="bankCard-contaner">
      <img className="bankCard-icon" src={masterCardIcon} />
      <h3 style={{ lineHeight: '1em' }}>BBB</h3>
      <h3 style={{ lineHeight: '1em' }}>**** 9618</h3>
      <div className="bankCard-month-container">
        <div className="bankCard-month">
          <span style={{ width: '4em' }}>Expire date</span>
          <span>
            <b>09/30</b>
          </span>
        </div>
        <img className="bankCard-qrCodeIcon" src={qrCodeIcon} />
      </div>
    </div>
  );
}
