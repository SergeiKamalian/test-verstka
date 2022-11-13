import { BsHouse } from 'react-icons/bs'
import { BsPerson } from 'react-icons/bs'
import { BsCardChecklist } from 'react-icons/bs'
import { BsGrid } from 'react-icons/bs'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useCallback, useState } from 'react'

interface ILink {
    value: string;
    jsx: JSX.Element;
}

const links: ILink[] = [
    { value: 'home', jsx: <BsHouse /> },
    { value: 'myInfo', jsx: <BsPerson /> },
    { value: 'experience', jsx: <BsCardChecklist /> },
    { value: 'portfolio', jsx: <BsGrid /> },
    { value: 'contactme', jsx: <BiMessageSquareDetail /> }
]

const Navigation = () => {

    const [activeLink, setActiveLink] = useState(links[0])

    const changeActiveLink = useCallback((link: ILink) => {
        setActiveLink(link)
    }, [])

    return (
        <nav className='Navigation'>
            <ul>
                {
                    links.map((link) =>
                        <li
                            className={link.value === activeLink.value ? 'activeLink' : ''}
                            onClick={() => changeActiveLink(link)}
                        >{link.jsx}</li>
                    )
                }
            </ul>
        </nav>
    )
}

export default Navigation