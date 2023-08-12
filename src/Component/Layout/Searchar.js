import "./Searchbar.css";

const Searchbar = () => {
  const toggler = () => {
    const searchBar = document.getElementById("search-bar");
    searchBar.classList.toggle("show-search");
  };
  return (
    <form action="https://www.google.com/search" class="search" id="search-bar">
      <input
        type="search"
        placeholder="Type something..."
        name="q"
        className="search__input"
      />

      <div onClick={toggler} className="search__button" id="search-button">
        <i className="ri-search-2-line search__icon"></i>
        <i className="ri-close-line search__close"></i>
      </div>
    </form>
  );
};

export default Searchbar;
