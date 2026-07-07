import styles from "@/styles/Skeleton.module.css";

const Skeleton = ({ width = "100%", height = "1rem", borderRadius = "4px", circle = false, className = "" }) => {
  return (
    <div
      className={`${styles.skeleton} ${className}`}
      style={{
        width,
        height,
        borderRadius: circle ? "50%" : borderRadius,
      }}
    />
  );
};

export default Skeleton;
