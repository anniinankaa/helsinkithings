import styles from './SplitContainer.module.css';

function SplitContainer({ left, right, ratio }) {
  return (
    <section className={styles.splitContainer}
      style={{ '--split-ratio': ratio }}
    >
        <div>{left}</div>
        <div>{right}</div>
    </section>
  )
}

export default SplitContainer;
