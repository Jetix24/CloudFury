import Link from "next/link"
import styles from "./Navbar.module.css"

export const Navbar = () => {
return (
    <section className = {styles.Navbar}> 
        <input type="checkbox" id={styles.check} />
        <nav>
        <Link href="/"> 
                <img src="/img/logo_blanc.png" id={styles.logo} alt="Logo" />
        </Link>
            <div className={styles.navigation}>
                <button>Proyecto</button>
                <button>Sobre nosotros</button>
                <Link href="/logIn">
                    <button>Iniciar sesión</button>
                </Link>
                <Link href="/SignUp">
                    <button id={styles.registrate}>Registrate</button>
                </Link>
            </div>

            <label htmlFor="check" className={styles.checkbtn}>
                <i className="fas fa-bars menu-btn"></i>
                <i className="fas fa-times close-btn"></i>
            </label>
        </nav>
    </section>
    )
}
