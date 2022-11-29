const Main = () => {
  return (
    <div className='Main container'>
      <h1 className="span_title">
        ПОЛУЧИ ЗАЩИТУ ИММУНИТЕТА <br />
        <span>СО СКИДКОЙ -15% ПЕРВЫМ!</span>
      </h1>
      <div className="price">
        <span className="oldPrice">750₽</span>
        <span className="newPrice">690₽</span>
      </div>
      <div className="products">

        <div className="product">
          <img src={require('../../images/ginger.png')} alt="ginger" className="ginger" />
          <span>
            Содержит <br />
            <span>имбирь</span>
          </span>
        </div>

        <div className="product">
          <img src={require('../../images/nootris2.png')} alt="nootris" className="nootris" />
          <span className="nootris_span">
          + Бесплатная доставка <br />
            <span>Специальная цена</span>
          </span>
        </div>

        <div className="product">
          <img src={require('../../images/vorus.png')} alt="vorus" />
          <span>
            Нейтрализует <br />
            <span>вирусы</span>
          </span>
        </div>

      </div>

      <button>Оформить заказ</button>
    </div>
  )
}

export default Main