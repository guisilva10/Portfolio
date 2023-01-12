import styles from './Navbar.module.scss';
import Navlink from './Navlink';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);

  const commonAttributes = {
    className: styles.icon,
    onClick: () => setIsMenu(!isMenu),
  };

  return (
    <section className={styles['navbar-wrapper']}>
      <div className={styles.navbar}>
        <nav>
          <ul className={styles.list}>
            <Navlink url='#about' text='Sobre Mim' />
            <Navlink url='#skills' text='Experiências' />
            <Navlink url='#projects' text='Projetos' />
            <Navlink url='#footer' text='Contato' />
          </ul>
        </nav>

        <div className={`${styles.mobile} ${isMenu ? styles.active : ''}`}>
          <GiHamburgerMenu {...commonAttributes} />
          <div className={styles.background}>
            <AiOutlineClose {...commonAttributes} />
            <nav>
              <ul className={styles['mobile-list']}>
                <Navlink
                  url='#about'
                  text='Sobre Mim'
                  toggleMenu={() => setIsMenu(!isMenu)}
                />
                <Navlink
                  url='#skills'
                  text='Experiências'
                  toggleMenu={() => setIsMenu(!isMenu)}
                />
                <Navlink
                  url='#projects'
                  text='Projetos'
                  toggleMenu={() => setIsMenu(!isMenu)}
                />
                <Navlink
                  url='#footer'
                  text='Contato'
                  toggleMenu={() => setIsMenu(!isMenu)}
                />
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;