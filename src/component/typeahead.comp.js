import React, { Component } from 'react';
import { fetchSuggestion } from '../utils/typeahead.helper';
import { debounce } from '../utils/common.helper';
import '../App.css';
import Suggestion from './suggestion.comp';

class TypeAheadView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            searchResult: [],
            isLoading: false,
        };
        this.fetchSuggestion = debounce(fetchSuggestion, 500);
    }

    updateResult = (data) => {
        this.setState({
            searchResult: data,
            isLoading: false,
        });
    };

    onSeachTextChanged = ({ target }) => {
        const searchText = target.value;
        this.setState({
            searchText,
            isLoading: true,
        }, () => {
            this.fetchSuggestion(searchText, this.updateResult);
        });
    };

    renderSearchResult = (searchResult) => (
        searchResult.map((resultItem) => {
            const {
                created_at,
                objectID,
                url,
                _highlightResult,
            } = resultItem;
            let {
                title,
                author,
                story_text,
            } = _highlightResult;
            if (title) {
                title = title.value;
            }
            if (author) {
                author = author.value;
            }
            if (story_text) {
                story_text = story_text.value;
            }
            return (
                <Suggestion
                    key={objectID}
                    createdAt={created_at}
                    author={author}
                    url={url}
                    storyText={story_text}
                    title={title}
                />
            );
        })
    );

    render() {
        const {
            isLoading,
            searchText,
            searchResult,
        } = this.state;

        return (
            <div className="type-ahead-view">
                <h3>Search Hacker News</h3>
                <input
                    type="text"
                    placeholder="Type here to start searching"
                    value={searchText}
                    onChange={this.onSeachTextChanged}
                />
                {isLoading ? (
                    <div className="loader" />
                ): (
                    <div className="search-result">
                        { this.renderSearchResult(searchResult) }
                    </div>
                )}
            </div>
        );
    }
}

export default TypeAheadView;
