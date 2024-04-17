import { Suspense } from "react";
import styles from "./page.module.css";
import ArticleSkeleton from "@/components/skeletons/article-skeleton/article-skeleton";
import ProfileSkeleton from "@/components/skeletons/profile-skeleton/profile-skeleton";
import Articles from "@/components/articles/articles";
import User from "@/components/user/user";

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.articles}>
        <h2>Articles</h2>
        <Suspense fallback={<ArticleSkeleton/>}>
            <Articles/>
        </Suspense>
      </div>
      <div className={styles.user}>
        <h2>User Details</h2>
        <Suspense fallback={<ProfileSkeleton/>}>
            <User/>
        </Suspense>
      </div>
    </main>
  );
}
