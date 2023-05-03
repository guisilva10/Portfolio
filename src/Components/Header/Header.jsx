import styles from  './Header.module.scss';
import { AiOutlineArrowDown } from 'react-icons/ai'
import useSanityImage from 'src/hooks/useSanityImage';
import Image from 'next/image';

const Header = ({header}) => {
  const { name, ocupation, summary, image } = header;
 


  const imageUrl = useSanityImage();

  

  return (
    <header className={styles['header-wrapper']}>
      <div className={styles.header}>
        <div className={styles.image}>
          <Image src={imageUrl(image).url()} layout='fill'/>
        </div>
        <div className={styles.content}>
          <span>Olá, eu sou o {name}, sou um...</span>
          <h1>{ocupation}</h1>
          <p>{summary}</p>
        </div>
          <a href="#about" className={styles.arrow}> 
            <AiOutlineArrowDown className={styles.icon}/>
          </a>
      </div>
    </header>
  ) 
}

export default Header;
