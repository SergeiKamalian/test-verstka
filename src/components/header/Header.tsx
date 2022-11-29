import MaskGroup from "../maskGroup/MaskGroup"

const Header = () => {
    return (
        <div className='Header container'>
            <div className="mask">
                <MaskGroup />
            </div>
            <div className="header_content">
                <h1>АКТИВИРУЙ <br /> ИММУНИТЕТ!</h1>
                <h2>
                    Всего пять секунд в день помогут укрепить иммунитет
                    и повысить защитные силы организма
                </h2>
                <span className="header_help_title">NOOTRIS ПОМОГАЕТ</span> <br />
                <span className="header_help_subtitle">Вашему организму во время пандемии <br /> и сезонных простуд</span>
            </div>
        </div>
    )
}

export default Header