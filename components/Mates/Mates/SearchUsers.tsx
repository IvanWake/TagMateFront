import LottieAnimation from "@/components/Lottie/Lottie";
import mainStyles from "./Mates.module.css";
import UsersList from "./UsersList";

const Mates = () => {
    return (
        <>
            <section className={mainStyles.mates}>
                <div className={mainStyles.sectionTitle}>Результаты поиска</div>
                {/* Если найдены: */}
                {/* <UsersList /> */}

                {/* Если НЕ найдены: */}
                <div className={mainStyles.matesText}>По вашему запросу ничего не найдено.</div>
            </section>
            <div className={mainStyles.bgWrapper}>
                <LottieAnimation
                    animationPath="https://lottie.host/5a73ab54-848f-45d4-b06e-9f9b483d352e/Tld5lo8utU.json"
                    width={100}
                    height={100}
                    loop={true}
                    autoplay={true}
                />
            </div>
        </>
    );
};

export default Mates;