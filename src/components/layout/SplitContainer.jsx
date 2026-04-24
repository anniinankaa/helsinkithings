import styles from './SplitContainer.module.css';

function SplitContainer({ left, right }) {
  return (
    <section className={styles.splitContainer}>
        <div>
          {left}
        </div>
        <div>
          {right}
        </div>
    </section>
  )
}

export default SplitContainer;
