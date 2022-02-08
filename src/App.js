
import './App.css';
import { useState } from 'react'
import tshirt from './shirtbackground.png'
import Picture from './Picture.js'
import Text from './Text.js'
import Sticker from './Sticker.js'
import Draw from './Draw.js'

function App() {
  let [color, setColor] = useState("")

  const addColor = colorName => {
    return () => {
      setColor(colorName)
    }
  }

  const [showPic, toggleShowPic] = useState(false);
  const [showText, toggleShowText] = useState(false);
  const [showSticker, toggleShowSticker] = useState(false);
  const [showDraw, toggleShowDraw] = useState(false);

  return (
    <div className="App">
      <div id="grid-6x7">
        <header id='grid-header'>
          <div id="header-title">deshert</div>
        </header>

        <header id='grid-color'>

          <div id="color-buttons">
            <div id='white-btn' onClick={addColor('whitesmoke')}>Vanilla-White</div>
            <div id='black-btn' onClick={addColor('black')}>Seasame-Black</div>
            <div id='pink-btn' onClick={addColor('mistyrose')}>Strawberry-Pink</div>
            <div id='yellow-btn' onClick={addColor('deepyellow')}>Mango-Yellow</div>
            <div id='mint-btn' onClick={addColor('cadetblue')}>Minty-Mint</div>
          </div>
        </header>

        <div id='grid-shirt'>
          <div id="shirt">
            <Text />

            <img id="tshirtFacing" src={tshirt} style={{ backgroundColor: `${color}` }} />
          </div>
        </div>

        <div id='grid-left-side'>
          <h1 id='menu-title'>Menu</h1>

          <div id='grid-left-side'>
            <h1 id='menu-title'>Menu</h1>

            <div id='menu-options'>
              <div id='pic' onClick={() => toggleShowPic(!showPic)}>Toppics--------$5</div>
              <div id='text' onClick={() => toggleShowText(!showText)}>Textra----------$1</div>
              <div id='sticker' onClick={() => toggleShowSticker(!showSticker)}>Chef's Pick------$2</div>
              <div id='drawing' onClick={() => toggleShowDraw(!showDraw)}>Today's Special--$5</div>
            </div>

            <div id='grid-right-side'>
              <h1 id='toolbar-title'>Tool Bar</h1>
              <h2 id='toolbar-subtitle'>Add a little sauce to your deshert</h2>
              {showPic && <Picture />}
              {showText && <Text />}
              {showSticker && <Sticker />}
              {showDraw && <Draw />}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;