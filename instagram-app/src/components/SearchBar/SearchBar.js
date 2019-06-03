import React, { Component } from 'react';
import './SearchBar.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() { 
        return (
            <form className="searchBar">
                <div>
                    <label for="search">
                        <FontAwesomeIcon icon={faInstagram} /> | Instagram 
                    </label>
                </div>

                <div>
                <input 
                    name="search"
                    className="searchbar"
                    type="text"
                    placeholder="&#128269; Search"
                />
                </div>
            </form>
        );
    }
}
 
export default SearchBar;