import styles from "../skeleton-element.module.css";
import SkeletonElement from "../skeleton-element";
import Shimmer from "../shimmer/shimmer";

export default function ArticleSkeleton() {
    return [1, 2, 3, 4, 5].map(n => (
        <div key={n} className={styles.skeletonWrapper}>
            <div className={styles.skeletonArticle}>
                <SkeletonElement type="title" />
                <SkeletonElement type="text" />
                <SkeletonElement type="text" />
                <SkeletonElement type="text" />
            </div>
            <Shimmer/>
        </div>
    ))
}