import { useState } from 'react'
import {ReactComponent as Logo} from '../../img/result.svg'
import './NavBar.css'

import { AiFillCaretDown } from "react-icons/ai";
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function NavBar(props) {

    const [t, i18n] = useTranslation("global")

    const checker = localStorage.getItem('lang')

    // Related to changing languages
    const [lanActivator, setLanActivator] = useState(false)
    
    const languageItems = () => {
        if (!lanActivator) {
            setLanActivator(true)
        }
        else{
            setLanActivator(false)
        }
    }

    const handleLangChange = (e) => {
        i18n.changeLanguage(e.target.value)
        localStorage.setItem('lang', e.target.value)
        setLanActivator(false)
    }

    // Related to changing languages

    // related to barItems
    const [activator, setActivator] = useState(false)
    const bar_items = (e) => {
            if (!activator) {
                setActivator(true)
            }
            else{
                setActivator(false)
            }
      };
    // related to barItems


    // Related to changing navbar outline

      

    // Related to changing navbar outline

  return (
    <div>
        <div className='!h-40 '>

        </div>
        <nav className={`
            shadow-lg
            py-5
            
            backdrop-blur-3xl	
            fixed
            top-0
            z-40
            w-full h-fit
            flex justify-center items-center ${checker === 'ar' && 'flex-row-reverse'}`}>
            <Link to={'/Main-Page'} className={`w-fit me-auto sm:ms-16 ms-3 transition-all hover:scale-105 active:scale-100 select-none ${checker === 'ar' && ' !ms-auto !sm:me-16 !me-3'} bg-white px-10 py-3 pe-5 rounded-xl`}><Logo/></Link>

            <ul className={`hidden lg:flex justify-center items-center gap-5 me-20 bg-white px-10 py-3 rounded-xl
                            whitespace-nowrap text-lg ${checker === 'ar' && 'flex-row-reverse !ms-20'}`}>
                <li className='linksTheme'><Link to={'/Main-Page'}>{t("NAV.main")}</Link></li>
                <li className='linksTheme'><Link>{t("NAV.services")}</Link></li>
                <li className='linksTheme'><Link>{t("NAV.projects")}</Link></li>
                <li className='linksTheme'><Link>{t("NAV.partners")}</Link></li>
                <li className='linksTheme'><Link>{t("NAV.Contact")}</Link></li>
                <li className='linksTheme !border-none'>
                    <div className='selectLanguage relative text-black'>
                        <h3 onClick={languageItems} className='langChanger'>LN <AiFillCaretDown /></h3>
                        <div className={`${lanActivator ? 'opacity-1' : 'opacity-0'} flex transition-all LangChangerDiv`}>
                            <button className='buttons' value={'fr'} onClick={handleLangChange}>FR</button>
                            <button className='buttons' value={'ar'} onClick={handleLangChange}>AR</button>
                        </div>
                    </div>
                </li>
            </ul>
            
        </nav>
            <div className={` bar_items hover:bg-white p-4 rounded-md flex lg:hidden justify-center items-center flex-col cursor-pointer h-6 w-6 fixed right-3 top-8 z-50 ${checker === 'ar' && '!left-8'} transition-all`} onClick={bar_items}>
                    <div className={`barItemsSticks ${activator ? 'rotate-45' : 'translate-y-2'}`}></div>
                    <div className={`barItemsSticks ${activator ? '-translate-x-2 opacity-0' : 'opacity-100'} `}></div>
                    <div className={`barItemsSticks ${activator ? '-rotate-45' : '-translate-y-2'} `}></div>
            </div>
                
            <ul className={`flex justify-start items-center flex-col gap-5 pt-16 pb-5 !overflow-auto {/* ${activator ? 'opacity-1 z-40' : 'opacity-0 !w-0 -z-10'}  */}
                            whitespace-nowrap text-lg 
                            fixed top-0 ${checker === 'ar' ? '!left-0' : '!right-0'} !h-screen w-full
                            border-t-2 border-b-2 bg-slate-100 border-gray-300
                            transition-all`}>
                <Link to={'/Main-Page'} className={`linksThemeHidden ${checker === 'ar' && '!justify-end'}`}>{t("NAV.main")}</Link>
                <Link className={`linksThemeHidden ${checker === 'ar' && '!justify-end'}`}>{t("NAV.services")}</Link>
                <Link className={`linksThemeHidden ${checker === 'ar' && '!justify-end'}`}>{t("NAV.projects")}</Link>
                <Link className={`linksThemeHidden ${checker === 'ar' && '!justify-end'}`}>{t("NAV.partners")}</Link>
                <Link className={`linksThemeHidden ${checker === 'ar' && '!justify-end'}`}>{t("NAV.Contact")}</Link>
                <li className={`linksTheme !border-none self-end me-4 z-10 ${checker === 'ar' && '!self-start !ms-4'}`}>
                    <div className='selectLanguage relative text-black '>
                        <h3 onClick={languageItems} className='langChanger'>LN <AiFillCaretDown /></h3>
                        <div className={`${lanActivator ? 'opacity-1' : 'opacity-0'} flex transition-all LangChangerDiv2 ${checker === 'ar' && ' left-14'}`}>
                            <button className='buttons' value={'fr'} onClick={handleLangChange}>FR</button>
                            <button className='buttons' value={'ar'} onClick={handleLangChange}>AR</button>
                        </div>
                    </div>
                </li>
            </ul>
    </div>
  )
}

export default NavBar