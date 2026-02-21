import Link from "next/link";
import feedStyles from "./FeedContent.module.css";
import { cardData } from "@/types/feed/cardContent";

const FeedCard = ({
  tag,
  photo,
  match,
  city,
  name,
  lastName,
  age,
  hobbys,
}: cardData) => {
  return (
    <Link href={`/feed/${tag}`}>
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
              {hobbys.slice(0, 5).map((hobby, i) => (
                <div key={i} className={feedStyles.hobby}>
                  <div className={feedStyles.hobbyName}>{hobby.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeedCard;
