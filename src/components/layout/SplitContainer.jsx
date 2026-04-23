import styles from './SplitContainer.module.css';

function SplitContainer({ left, right }) {
  return (
    <section className={styles.splitContainer}>
        {left}
        {right}
    </section>
  )
}

export default SplitContainer;
