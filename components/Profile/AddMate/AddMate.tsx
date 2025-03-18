import addMateStyles from "./AddMate.module.css";

const AddMate = () => {
    return (
        <>
            <div className={`${addMateStyles["user-mate-menu"]}`}>
                <div className={`${addMateStyles["user-add-mate"]}`}>Добавить в мейты</div>
            </div>
        </>
    );
}

export default AddMate;