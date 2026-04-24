import styles from './SidewaysSection.module.css'

function SidewaysSection({ header, content }) {
  return (
    <section className={styles.sidewaysSection}>
      <h2 className={styles.header}>
        {header}
      </h2>
      <div className={styles.content}>
        {content}
      </div>
    </section>
  )
}

export default SidewaysSection;