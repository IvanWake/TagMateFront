import feedStyles from "./FeedContent.module.css";
import { cardData } from "@/types/feed/cardContent";

const FeedCard = ({photo,match,city,name,lastName, age, hobbys}: cardData) => {
  return (
    <div className={feedStyles.feedCard}>
      <div className={feedStyles.gradientWrapper}>
        <img
          src={photo}
          alt="Фото пользователя"
          className={feedStyles.photo}
        />
        <div className={feedStyles.match}>Мэтч {match}%</div>
        <div className={feedStyles.information}>
          <div className={feedStyles.about}>
            <div className={feedStyles.city}>{city}</div>
            <div className={feedStyles.nameAge}>
              {name} {lastName}, {age}
            </div>
          </div>
          <div className={feedStyles.hobbys}>
            {hobbys.map((hobby, i) => (
              <div key={i} className={feedStyles.hobby}>
                <div className={feedStyles.hobbyName}>{hobby.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;