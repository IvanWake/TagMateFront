import feedStyles from "./FeedContent.module.css";
import mockPhoto from "@/public/Natalia.jpg";
import Image from "next/image";

const hobbys = [
  { icon: "📃", name: "Оригами" },
  { icon: "🖌", name: "Веб-дизайн" },
  { icon: "💨", name: "Кальян" },
  { icon: "🎀", name: "Аниме" },
  { icon: "📺", name: "Сериалы" },
];

const FeedCard = () => {
  return (
    <div className={feedStyles.feedCard}>
      <div className={feedStyles.gradientWrapper}>
        <Image
          src={mockPhoto}
          alt="Фото пользователя"
          className={feedStyles.photo}
        />
        <div className={feedStyles.match}>Мэтч 89%</div>
        <div className={feedStyles.information}>
          <div className={feedStyles.about}>
            <div className={feedStyles.city}>Москва</div>
            <div className={feedStyles.nameAge}>Наталья Пигарова, 26</div>
          </div>
          <div className={feedStyles.hobbys}>
            {hobbys.map((hobby, i) => (
              <div key={i} className={feedStyles.hobby}>
                <div className={feedStyles.hobbyIcon}>{hobby.icon}</div>
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