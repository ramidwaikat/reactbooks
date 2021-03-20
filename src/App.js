import "./App.css";
import "./css/style.css";
import Cards from "./containers/cards";
import Categories from "./containers/categories";
import Footer from "./containers/footer";
import children from "../src/data/children.json";
import lstCategories from "../src/data/categories.json";
import selfImprovement from "../src/data/self_improvement.json";
import fiction from "../src/data/fiction.json";
import nonfiction from "../src/data/nonfiction.json";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <div className="header_logo">
            <b>Browse</b>Reviews
          </div>

          <input type="checkbox" id="checkbox" />
          <nav>
            <ul className="header_links">
              <li className="header_link">Home</li>
              <li className="header_link header_link_Special ">
                Books <i class="arrow down"></i>
              </li>
              <li className="header_link">Reviews</li>
              <li className="header_link">News</li>
              <li className="header_link">Contacts</li>
            </ul>
          </nav>
          <label for="checkbox">
            <i class="fa fa-bars menu-icon"></i>
          </label>
        </div>

        <div className="categories-section">
     
          <Categories
            lstReviews={lstCategories.categories.slice(0, 8)}
          ></Categories>
        </div>
        <div className="notification">
          <Cards
            lstBooks={nonfiction.books}
            title="Notification"
            background="White"
          />
        </div>
        <div className="fiction">
          <Cards lstBooks={fiction.books} title="Fiction" background="Black" />
        </div>
        <div className="children">
          <Cards
            lstBooks={children.books}
            title="Childre'n"
            background="White"
          />
        </div>
        <div className=" self-development">
          <Cards
            lstBooks={selfImprovement.books}
            title="Self Development"
            background="Black"
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default App;
