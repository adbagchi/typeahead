const debounce = (callback, delay) => {
    let trigger;
    return async (...args) => {
        if (trigger) {
            clearTimeout(trigger);
            trigger = null;
        }
        trigger = await setTimeout(function () {
            callback(...args);
        }, delay);
    };
};

const getQueryParamFromObj = (obj) => {
    const queryParam = Object.entries(obj).reduce((acc, current) => {
        const [key, value] = current;
        return acc.concat(`${key}=${value}`);
    }, []).join('&');
    return `?${queryParam}`;
};

const sortArray = (array, field, defaultVal) => (
    array.sort((a, b) => (b[field] || defaultVal) - (a[field] || defaultVal))
);

const arrayTopX = ({ 
    array, field, topX, defaultVal
}) => {
    const sortedArray = sortArray(array, field, defaultVal);
    return sortedArray.slice(0, topX);
};

const readableDate = (date) => {
    const givenDateTime = new Date(date).getTime();
    const currentDateTime = new Date().getTime();
    const diffDays = Math.round((currentDateTime - givenDateTime) / (1000*60*60 * 24));
    let diff = 0;
    let unit = '';
    if ((diffDays / 365) >= 1) {
        diff = (diffDays /365).toFixed(2);
        unit = 'years';
    } else if ((diffDays / 30) >= 1) {
        diff = (diffDays /30).toFixed(2);
        unit = 'months';
    } else {
        diff = Math.round(diff);
        unit = 'months';
    }
    return `${diff} ${unit} ago`;
};

export {
    arrayTopX,
    debounce,
    getQueryParamFromObj,
    readableDate,
};