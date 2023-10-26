import { useTranslation } from 'react-i18next'
import Cards from './Cards.js'
import './Serv.css'


// Realted to cards Images
    import {ReactComponent as Card1} from '../../../img/cards/internet-svgrepo-com.svg'
    import {ReactComponent as Card2} from '../../../img/cards/smartphone-iphone-svgrepo-com.svg'
    import {ReactComponent as Card3} from '../../../img/cards/graphic-design-monitor-svgrepo-com.svg'
    import {ReactComponent as Card4} from '../../../img/cards/seo-search-svgrepo-com.svg'
    import {ReactComponent as Card5} from '../../../img/cards/social-network-social-media-svgrepo-com.svg'
    import {ReactComponent as Card6} from '../../../img/cards/marketing-svgrepo-com.svg'

import { Link } from 'react-router-dom'
// Realted to cards Images

function Serv(props) {
    

    const [t] = useTranslation("global")
    const checker = localStorage.getItem('lang')

  return (

        <div className='services relative '>
            <div className='relative flex justify-start items-center flex-col '>
                <div className='relative top-10 flex justify-between items-center flex-col w-full md:h-36 h-full px-10 pt-5'>
                    <h1 className='text-6xl text-blue-900'>{t('CARDS.title')}</h1>
                    <div className='text-center text-2xl text-gray-500'>
                        <p>{t('CARDS.subTitle')}</p>
                        <p>{t('CARDS.subTitle2')}</p>
                    </div>
                </div>

                <div className='relative top-20 z-10 grid grid-flow-row sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-1 w-fit h-fit'>
                    <Cards imgsrc={<Card1 className='svgCards'/>} title={t('CARDS.card.card1.title')} msg={t('CARDS.card.card1.text')} btn={t('CARDS.card.card1.btn')}/>
                    <Cards imgsrc={<Card2 className='svgCards'/>} title={t('CARDS.card.card2.title')} msg={t('CARDS.card.card2.text')} btn={t('CARDS.card.card2.btn')}/>
                    <Cards imgsrc={<Card3 className='svgCards'/>} title={t('CARDS.card.card3.title')} msg={t('CARDS.card.card3.text')} btn={t('CARDS.card.card3.btn')}/>
                    <Cards imgsrc={<Card4 className='svgCards'/>} title={t('CARDS.card.card4.title')} msg={t('CARDS.card.card4.text')} btn={t('CARDS.card.card4.btn')}/>
                    <Cards imgsrc={<Card5 className='svgCards'/>} title={t('CARDS.card.card5.title')} msg={t('CARDS.card.card5.text')} btn={t('CARDS.card.card5.btn')}/>
                    <Cards imgsrc={<Card6 className='svgCards'/>} title={t('CARDS.card.card6.title')} msg={t('CARDS.card.card6.text')} btn={t('CARDS.card.card6.btn')}/>
                </div>

                <div className='relative w-full h-fit top-64'>
                    <div className={`w-full bg-gradient-to-tr from-cyan-400 via-indigo-500 to-indigo-500 flex justify-center items-center gap-20 flex-col lg:flex-row  ${checker === 'ar' && 'lg:!flex-row-reverse'} px-2 sm:px-10 py-16 lg:py-10 box-border`}>
                        <p className='max-w-4xl text-justify text-2xl text-white'>{t('STRIP.topic')}</p>
                        <Link to={'/Main-Page'} className=' 
                        w-full lg:w-fit px-2 sm:px-10 py-5
                        whitespace-pre-wrap sm:whitespace-nowrap  text-center text-2xl text-indigo-400 hover:text-white 
                        bg-white hover:bg-transparent border-2 border-white rounded-md transition-all'>{t('STRIP.btn')}</Link>
                    </div>

                    <div className='flex justify-center items-center gap-20 object-cover'>
                        <div className='py-20 px-2 sm:px-10 flex justify-center items-center flex-col gap-5'>
                            <h1 className='text-4xl text-blue-950'>{t('OFFERS.title')}</h1>
                            <div className='text-gray-500 text-xl text-justify !font-sans '>
                                <p className='mb-5'>{t('OFFERS.p1')}</p>
                                <p className='mb-5'>{t('OFFERS.p2')}</p>
                                <p className='mb-5'>{t('OFFERS.p3')}</p>
                            </div>
                            <Link >{t('OFFERS.btn')}</Link>
                        </div>
                        <div className=''></div>
                    </div>

                </div>
            </div>

            
        </div>
  )
}

export default Serv