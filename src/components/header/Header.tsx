import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs'

const Header = () => {
  const texts = useSelector((state: RootState) => state.texts.textContent)

  return (
    <header id='header'>
      <span className="hello">{texts.helloHeader.en}</span>
      <span className="myName">{texts.myName.en}</span>
      <span className="myProfession">{texts.myProfession.en}</span>
      <div className="buttons">
        <a href={require('../../images/CV.pdf')} target='_blank' download>
          <button className="cv">{texts.downloadCV.en}</button>
        </a>
        <button className="talk">{texts.letsTalk.en}</button>
      </div>
      <div className="links">
        <a href="https://github.com/SergeiKamalian" target='_blank'><BsGithub /></a>
        <a href="https://www.linkedin.com/sergey-kamalyan-37579524a" target='_blank'><BsLinkedin /></a>
        <a href="https://www.instagram.com/qamalyannn/" target='_blank'><BsInstagram /></a>
      </div>
    </header>
  )
}

export default Header