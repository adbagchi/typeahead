import { API } from '../constants/api.const';
import { getQueryParamFromObj } from './common.helper';

const fetchData = async (objQuery) => {
    try {
        const queryParam = getQueryParamFromObj(objQuery);
        const response = await fetch(`${API}${queryParam}`);
        const data = await response.json();
        return data;
    } catch (ex) {
        console.error(ex);
    }
};


 export {
    fetchData,
 };