import Link from "next/link";

const Error = () => {
    return (
        <div
            style={
                {
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "150px",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "90vh"
                }
            }
        >
            404
            <Link href="/">
                <h1 style={{textDecoration: "none", fontSize: "36px", color: "#000"}}>Вернуться на главную</h1>
            </Link>
        </div>
    );
}

export default Error;