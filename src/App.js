
import './App.css';
import FirstSlide from './components/FirstSlide';
import Navbar from './components/Navbar';
import SpecialStrip from './components/SpecialStrip';

function App() {
  return (
    <>
    <div>
    <SpecialStrip MainText={'Purchase two eligible seasonal products to receive a Karst Eau De Parfum sample.' } text={'Browse Formulations'} bgColor={'#c2c2af'}/>
    <SpecialStrip MainText={'Click and Collect is now available in Hong Kong. Enjoy complimentary shipping on all orders.' } text={'+'} bgColor={'#252525'} fontColor={'#fffef2'}/>
    </div>
    <div>
      <Navbar itemList={['Skin Care','Body & Hand','Hair','Fragrance', 'Home','Kits & Travel', 'Gifts','Read','Stores','Facial Appointments']}/>
    </div>
    <FirstSlide />
    </>
  );
}

export default App;
