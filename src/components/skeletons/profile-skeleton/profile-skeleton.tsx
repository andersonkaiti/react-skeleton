import styles from "../skeleton-element.module.css";
import SkeletonElement from "../skeleton-element";
import Shimmer from "../shimmer/shimmer";

export default function ProfileSkeleton() {
    return (
        <div className={styles.skeletonWrapper}>
            <div className={styles.skeletonProfile}>
                <div className={styles.skeletonAvatar}>
                    <SkeletonElement type="avatar" />
                </div>
                <div className={styles.skeletonProfileContent}>
                    <SkeletonElement type="title" />
                    <SkeletonElement type="text" />
                    <SkeletonElement type="text" />
                </div>
            </div>
            <Shimmer/>
        </div>
    )
}