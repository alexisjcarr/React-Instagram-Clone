import React, { Component } from 'react';
import './SearchBar.scss';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() { 
        return (
            <form>
                <input 
                    className="searchbar"
                    type="text"
                    placeholder="&#128269; Search"
                />
            </form>
        );
    }
}
 
export default SearchBar;