import css from "./LoadMore.module.css";

export const LoadMore = ({ onLoadMore }) => {
  return (
    <div className={css.wrapper}>
        <button className={css.button} onClick={onLoadMore}>
          Load More
        </button>
    </div>
  )
}