import styles from './SingleContainer.module.css';

function SingleContainer({ children }) {
  return (
    <section className={styles.singleContainer}>
      {children}
    </section>
  )
}

export default SingleContainer;