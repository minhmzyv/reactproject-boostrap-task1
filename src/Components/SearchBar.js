import React from 'react'

const SearchBar = () => {
    return (
        <nav className="navbar py-3">
            <div className="container-fluid">
                <form class="d-flex">
                    <input class="form-control ms-4" type="search" placeholder="Search for..." aria-label="Search" />
                    <button className="btn" type="submit">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>
            </div>
        </nav>
    )
}

export default SearchBar