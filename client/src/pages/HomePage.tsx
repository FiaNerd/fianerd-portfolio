import { useTranslation } from "react-i18next"

const HomePage = () => {
  const { t } = useTranslation('home')
  return (
    <>
      <h1 className='md:text-4xl font-heading font-black'>
        {t('title')}
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam perspiciatis alias a doloremque! Ipsam sed deserunt aliquam ab consectetur veniam fugiat quasi iste fugit, distinctio, et aperiam? Voluptatem, odit incidunt.</p>
    </>
  )
}

export default HomePage
