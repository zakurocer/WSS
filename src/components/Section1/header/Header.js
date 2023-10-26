import { useTranslation } from 'react-i18next'
import './header.css'
export default function Header() {

  const [t] = useTranslation("global")
  const checker = localStorage.getItem('lang')

  const backgrounds = ['https://webservicessh.com/wp-content/uploads/2021/10/AGENCE-DE-COMMUNICATION-CONSEIL-EN-MARKETING-DIGITAL-2.png', 'https://webservicessh.com/wp-content/uploads/2021/10/agence-de-production-et-communication-laayoune-maroc.png']

  return (
    <div className={`headerBackground `} style={{background: `${checker === "ar" ? `url(${backgrounds[1]})` : `url(${backgrounds[0]})`}`, backgroundPosition: `${checker === 'ar' ? 'left' : 'right'}`}}>
        <div>
          <h1 className={`text-cyan-700 font-bold lg:text-6xl md:text-4xl text-2xl max-w-md ${checker === 'ar' && 'self-end text-right !text-7xl'}`}>{t('HEADER.title')}</h1>
          <p className={`text-cyan-950 text-2xl max-w-4xl my-6 mt-20 ${checker === 'ar' && 'self-end text-right !text-3xl'}`}>{t('HEADER.subTitle')}</p>
        </div>
    </div>
  )
}
