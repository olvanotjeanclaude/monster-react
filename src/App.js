// @ts-nocheck
import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.compnent";
import { SearchBar } from "./components/searchBar/search-bar.component";

class App extends Component {
    constructor() {
        super();
        this.state = {
            monster: [],
            searchBox: "",
        };
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((users) => this.setState({ monster: users }));
    }
    handleChange = (e) => {
        this.setState({ searchBox: e.target.value });
    };
    render() {
        const monster = this.state.monster;
        const searchBox = this.state.searchBox;
        var filterMonster = [];
        if (monster.length > 0) {
            filterMonster = monster.filter((monster) => {
                return monster.name
                    .toLowerCase()
                    .includes(searchBox.toLowerCase());
            });
        }

        return ( <
            div className = "App" >
            <
            SearchBar placeholder = "search monsters"
            handleChange = { this.handleChange }
            />{" "} <
            CardList monster = { filterMonster } > < /CardList>{" "} <
            /div>
        );
    }
}

export default App;