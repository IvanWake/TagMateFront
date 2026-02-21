import feedStyles from "./FeedContent.module.css";

const Loader = () => {
  return (
    <div className={feedStyles.feedCard}>
      <div className={feedStyles.photoLoader}></div>
      <div className={feedStyles.matchLoader}></div>
      <div className={feedStyles.informationLoader}>
        <div className={feedStyles.about}>
          <div className={feedStyles.cityLoader}></div>
          <div className={feedStyles.nameAgeLoader}></div>
        </div>
        <div className={feedStyles.hobbys}>
          {Array.from({ length: 3 }, (_, i) => (
            <div key={`short-${i}`} className={feedStyles.shortHobby} />
          ))}
          {Array.from({ length: 2 }, (_, i) => (
            <div key={`long-${i}`} className={feedStyles.longHobby} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;
