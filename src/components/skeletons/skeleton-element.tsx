import styles from "./skeleton-element.module.css";

type SkeletonElementType = {
    type: string;
}

export default function SkeletonElement({ type }: SkeletonElementType) {
    const classes = `${styles.skeleton} ${styles[type]}`;

    return (
        <div className={classes}></div>
    )
}