const BurgerMenu = () => {
  return (
    <div className='BurgerMenu'>
      <ul>
        <li>FAQ</li>
        <li>Оплата и доставка</li>
        <li>Возврат</li>
        <li>Исследования</li>
        <li>Личный кабинет</li>
      </ul>
      <span>8 8 (800) 600-09-90</span>
      <div className="basket">
        <img src={require('../../images/basket.png')} alt="basket" />
        <div className="basket_count center">1</div>
      </div>
    </div>
  )
}

export default BurgerMenu