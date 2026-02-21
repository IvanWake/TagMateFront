import feedStyles from "./FeedContent.module.css";
import like from "@/public/icons/like.svg";
import rejection from "@/public/icons/rejection.svg";
import Image from "next/image";
import { buttonState } from "@/types/feed/cardContent";

const CardButtons = ({ disabled, onReject, onLike }: buttonState) => {
  return (
    <div className={feedStyles.cardButtons}>
      <button
        disabled={disabled}
        onClick={onReject}
        className={`${feedStyles.voteButton} ${feedStyles.rejectButton}`}
      >
        <Image src={rejection} alt="rejection" />
      </button>
      <button
        disabled={disabled}
        onClick={onLike}
        className={`${feedStyles.voteButton} ${feedStyles.likeButton}`}
      >
        <Image src={like} alt="like" />
      </button>
    </div>
  );
};

export default CardButtons;
