import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineClose } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'
const Navigation = ({ setBurgerOpen, burgerOpen }: { burgerOpen: boolean; setBurgerOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {

    const changeBurgerMenu = () => {
        burgerOpen ? setBurgerOpen(false) : setBurgerOpen(true)
        console.log('сработал')
    }

    return (
        <div className='Navigation flexRow container'>
            <img src={require('../../images/logo.png')} alt="logo" />
            <ul className="flexRow">
                <li>FAQ</li>
                <li>Оплата и доставка</li>
                <li>Возврат</li>
                <li>Исследования</li>
                <li>Личный кабинет</li>
                <li>8 8 (800) 600-09-90</li>
            </ul>
            <div className="basket">
                <img src={require('../../images/basket.png')} alt="basket" />
                <div className="basket_count center">1</div>
            </div>
            <div className="burger" onClick={changeBurgerMenu} style={{ color: 'white' }}>
                {burgerOpen ? <MdOutlineClose /> : <GiHamburgerMenu />}
            </div>
        </div>
    )
}

export default Navigation