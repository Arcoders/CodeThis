function Panel() {
    return <header>
        <nav>
            <div className="logo">
                <span className="material-icons logo__menu">menu</span>
                <span className="logo__text">CODE THIS</span>
            </div>
            <div className="menu">
                <span>Login</span>
                <span>Register</span>
                <span>Profile</span>
                <span className="material-icons">settings</span>
            </div>
        </nav>
    </header>
}

export default Panel;