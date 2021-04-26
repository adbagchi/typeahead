import React from 'react';
import '../App.css';
import { readableDate } from '../utils/common.helper';

const Suggestion = ({
    title,
    author,
    createdAt,
    url,
    storyText,
}) => (
    <div className="suggestion">
        <div className="row">
            <span className="title" dangerouslySetInnerHTML={{__html: title }} />
            {url && (<span>({url})</span>)}
        </div>
        <div className="row">
            <span>Author: <span dangerouslySetInnerHTML={{__html: author }} /></span>
            <span className="diff">|</span>
            <span>{readableDate(createdAt)}</span>
        </div>
        {storyText && (
            <div className="row" dangerouslySetInnerHTML={{__html: storyText }} />
        )}
    </div>
);

export default Suggestion;