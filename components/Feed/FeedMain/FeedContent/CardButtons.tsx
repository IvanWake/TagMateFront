import feedStyles from "./FeedContent.module.css";
import mockPhoto from "@/public/Natalia.jpg";
import like from "@/public/icons/like.svg";
import rejection from "@/public/icons/rejection.svg";
import Image from "next/image";

const CardButtons = () => {
  return (
    <div className={feedStyles.cardButtons}>
      <button className={`${feedStyles.voteButton} ${feedStyles.rejectButton}`}>
        <Image src={rejection} alt="rejection" />
      </button>
      <button className={`${feedStyles.voteButton} ${feedStyles.likeButton}`}>
        <Image src={like} alt="like" />
      </button>
    </div>
  );
};

export default CardButtons;