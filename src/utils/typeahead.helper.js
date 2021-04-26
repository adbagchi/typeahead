import { fetchData } from './api.helper';
import { arrayTopX } from './common.helper';
import {
    DEFAULT_VAL_SORT,
    SORT_FIELD,
    TOP_FIELD_DISPLAY,
} from '../constants/typeahead.const';

const sortFilterSuggestion = (suggestion) => {
    const result = arrayTopX({
        array: suggestion,
        field: SORT_FIELD,
        topX: TOP_FIELD_DISPLAY,
        defaultVal: DEFAULT_VAL_SORT,
    });
    return result;
};

const fetchSuggestion = async (hints, updateView) => {
    const query = {
        query: hints,
    };
    const data = await fetchData(query);
    const suggestion = sortFilterSuggestion(data.hits);
    updateView(suggestion);
};

export {
    fetchSuggestion,
};
