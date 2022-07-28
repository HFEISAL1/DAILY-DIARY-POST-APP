const Header = ({ title }) => {
    // passes data from app.js
    return (
        <header className="Header">
            <h1>{title}</h1>
        </header>
    )
}

export default Header