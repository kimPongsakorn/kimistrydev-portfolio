"use client";

import HeadNavigation from "../components/shared/head_navi";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={`${styles.container} bg-gray-300 relative min-h-screen`}>
      <img
        src="/head_bg_home.svg"
        alt="bg gradient"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Content on top */}
      <div className="relative z-10 pt-0">
        <div className="fixed top-0 left-0 right-0 w-full z-20 p-4">
          <HeadNavigation />
        </div>
        <main className={styles.main}></main>
      </div>
    </div>
  );
};

export default Home;
