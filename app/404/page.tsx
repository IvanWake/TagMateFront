import Link from "next/link";

const Error = () => {
    return (
        <div
            style={
                {
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    fontSize: "150px",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "90vh"
                }
            }
        >
            404
            <Link href="/">
                <h1 style={{textDecoration: "none", color: "#000", fontSize: "36px"}}>Вернуться на главную</h1>
            </Link>
        </div>

    );
}

export default Error;