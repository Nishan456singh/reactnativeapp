import axios from "axios";

const API_KEY = '44248431-b33ef4931954b005d3ab3eec3';

const apiUrl = `https://pixabay.com/api/?key=${API_KEY}`;

const formatUrl = (params) => {
    let url = apiUrl+ "&per_page=25&safeSearch=true&editors_choice=true"
    if(!params) return url;
    let paramKeys = Object.keys(params);
    paramKeys.map(key=>{
        let value = key== 'q' ? encodeURIComponent(params[key]): params[key];
        url += `&${key}=${value}`;
    });
    return url;
}

export const apiCall = async (params) => {
    try {
        const response = await axios.get(formatUrl(params));
        const {data} = response;
        return {success: true, data};
    } catch (err) {
        console.log('got error', err.message);
        return {success: false, msg: err.message};
    }
}