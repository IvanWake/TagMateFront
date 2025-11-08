import styles from "./Loading.module.css";

type Props = { w: string, h: string, isComp?: boolean }

const Loading = ({ w, h, isComp }: Props) => {
    return (
        <>
            {
                isComp ?
                    <div className={styles.spin} style={{
                        width: `${w}rem`,
                        height: `${h}rem`
                    }}></div> :
                    <div className={styles.page}>
                        <div className={styles.spin} style={{
                            width: `${w}rem`,
                            height: `${h}rem`
                        }}></div>
                    </div>
            }
        </>
    );
}

export default Loading;