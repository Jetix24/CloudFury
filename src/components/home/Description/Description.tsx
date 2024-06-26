import styles from "./Description.module.css"

export const Description = () => {
    return (
        <section>
          <div className={styles.Description}>
            <div className={styles.info}>
              <h2>Añade esa <span>chispa</span> a la conversación</h2>
              <img src="/img/background_index.jpg" alt="" />
              <p>Con Prattle, la conversación va más allá de las palabras; nuestra aplicación aprovecha la potencia de la IA para personalizar tus interacciones de manera única.</p>
              <a href="/signup" className={styles.infoBtn}>Comienza ahora</a>
            </div>
          </div>
        </section>
    )
}
