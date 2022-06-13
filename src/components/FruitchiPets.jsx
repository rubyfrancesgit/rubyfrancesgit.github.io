import { useSelector, useDispatch } from 'react-redux';
import { setBackgroundClasses } from '../reducers/backgroundClasses';

// Media
import blueberry from '../assets/blueberry.svg';
import strawberry from '../assets/strawberry.svg';
import orange from '../assets/orange.svg';
import chuffedBlueberry from '../assets/chuffed-blueberry.svg';
import chuffedStrawberry from '../assets/chuffed-strawberry.svg';
import chuffedOrange from '../assets/chuffed-orange.svg';

function FruitchiPets() {
    const dispatch = useDispatch();

    const backgroundClasses = useSelector((state) => state.backgroundClasses.value);

    const selectBackgroundClasses = (value) => {
        console.log(value);

        dispatch(setBackgroundClasses("choose-fruitchi " + value));
    }

    const setChoosenPet = async (thisPet) => {
      console.log('click');
  
      if (thisPet === 'blueberry') {
        document.getElementById('strawberry').classList.add("hide");
        document.getElementById('orange').classList.add("hide");
        document.getElementById('blueberry').classList.remove("hide");
      } else if (thisPet === 'strawberry') {
        document.getElementById('blueberry').classList.add("hide");
        document.getElementById('orange').classList.add("hide");
        document.getElementById('strawberry').classList.remove("hide");
      } else if (thisPet === 'orange') {
        document.getElementById('blueberry').classList.add("hide");
        document.getElementById('strawberry').classList.add("hide");
        document.getElementById('orange').classList.remove("hide");
      }
    }
  
    const chuffedHover = (ids) => {
      document.getElementById(ids[0]).classList.add("hide");
      document.getElementById(ids[1]).classList.remove("hide");
      document.getElementById(ids[1]).classList.add("choose-fruitchi__patting");
      console.log('hover');
    }
  
    const chuffedReverseHover = (ids) => {
      document.getElementById(ids[0]).classList.remove("hide");
      document.getElementById(ids[1]).classList.add("hide");
    }
  
    return (
        <>
        <div class="fruitchi-nav">
            <div class="fruitchi-nav__div">
            <p class="fruitchi-nav__p">Choose pet</p>
            <ul class="fruitchi-nav__ul">
                <li class="fruitchi-nav__li" onClick={() => setChoosenPet('blueberry')}>🫐</li>
                <li class="fruitchi-nav__li" onClick={() => setChoosenPet('strawberry')}>🍓</li>
                <li class="fruitchi-nav__li" onClick={() => setChoosenPet('orange')}>🍊</li>
            </ul>
            </div>

            <div class="fruitchi-nav__div">
                <p class="fruitchi-nav__p">Choose background</p>
                <div class="fruitchi-nav__bg-picker-div">
                    <div class="fruitchi-nav__colour-square fruitchi-nav__green-bg-picker" id="greenBgPicker" onClick={() => selectBackgroundClasses("green-bg")}></div>
                    <div class="fruitchi-nav__colour-square fruitchi-nav__blue-bg-picker" id="blueBgPicker" onClick={() => selectBackgroundClasses("blue-bg")}></div>
                    <div class="fruitchi-nav__colour-square fruitchi-nav__pink-bg-picker" id="pinkBgPicker" onClick={() => selectBackgroundClasses("pink-bg")}></div>
                </div>
            </div>
        </div>
      <div className={backgroundClasses}>
        <img className="choose-fruitchi__pet" id="blueberry" src={blueberry} onMouseOver={() => chuffedHover(['blueberry', 'chuffedBlueberry'])} alt="blueberry Fruitchi pet" onClick={() => setChoosenPet('blueberry')} />
        
        <img className="choose-fruitchi__pet hide" src={chuffedBlueberry} id="chuffedBlueberry" onMouseOut={() => chuffedReverseHover(['blueberry', 'chuffedBlueberry'])} alt="blueberry Fruitchi pet" onClick={() => setChoosenPet('blueberry')} />
  
        <img className="choose-fruitchi__pet" id="strawberry" src={strawberry} onMouseOver={() => chuffedHover(['strawberry', 'chuffedStrawberry'])} alt="blueberry Fruitchi pet" onClick={() => setChoosenPet('strawberry')} />
  
        <img className="choose-fruitchi__pet hide" src={chuffedStrawberry} id="chuffedStrawberry" onMouseOut={() => chuffedReverseHover(['strawberry', 'chuffedStrawberry'])} alt="blueberry Fruitchi pet" onClick={() => setChoosenPet('strawberry')} />
  
        <img className="choose-fruitchi__pet" id="orange" onMouseOver={() => chuffedHover(['orange', 'chuffedOrange'])} src={orange} alt="blueberry Fruitchi pet" onClick={() => setChoosenPet('orange')} />
  
        <img className="choose-fruitchi__pet hide" src={chuffedOrange} id="chuffedOrange" onMouseOut={() => chuffedReverseHover(['orange', 'chuffedOrange'])} alt="blueberry Fruitchi pet" onClick={() => setChoosenPet('orange')} />
      </div>
      </>
    )
}

export default FruitchiPets
