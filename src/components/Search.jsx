import React from 'react';
import { browserHistory as history } from 'react-router';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this._handleSubmit = this._handleSubmit.bind(this);
    }
    _handleSubmit(e) {
        e.preventDefault();
        history.push(`/user/${this.refs.userInput.value}`);
    }

    render() {
        return (
            <div className="search-page">
                <h2 className="second-heading"></h2>
                <form onSubmit={this._handleSubmit}>
                    <input ref="userInput" className="search-page__input" type="text" placeholder="Enter a Username" />
                    <button className="search-page__button">Search</button>
                </form>
                <h2 className="search-arrow"></h2>
            </div>
        );
    }
}

export default Search;