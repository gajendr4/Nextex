const Navbar = () => {
    return (
        <>
            <nav className="container">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom aos-init aos-animate">
                    <a href="" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                        <svg className="bi me-2 rounded" width="40" height="32" role="img" aria-label="Bootstrap">
                        </svg><img src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo-black.svg
                        " alt="" className="rounded" height="32" width="40" />

                    </a>
                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" className="nav-link px-2 link-secondary">Home</a></li>
                        <li><a href="/pmssir/about.html" className="nav-link px-2 link-dark">About</a></li>
                        <li><a href="/pmssir/ebook.html" className="nav-link px-2 link-dark">Ebook</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">FAQs</a></li>
                        <li><a href="/pmssir/contact.html" className="nav-link px-2 link-dark">Contact</a></li>
                    </ul>

                    <div className="col-md-3 text-end">
                        <form className="d-flex">
                            <input className="form-control me-2" id="search-input" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-info" id="search" type="submit">Search</button>
                            <style jsx>{`#search:hover {color: white;}`}</style>
                        </form>
                    </div>
                </header>
            </nav>
        </>
    )
}

export default Navbar