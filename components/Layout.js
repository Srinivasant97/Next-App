import styles from '../styles/Home.module.css'
import Nav from './Nav'
import  Header  from './Header'

function Layout({children}) {
  return (
    <div className={styles.container}>
        <Nav />
        <Header />
        <div className={styles.main}>
            {children}
        </div>
        
    </div>
  )
}

export default Layout