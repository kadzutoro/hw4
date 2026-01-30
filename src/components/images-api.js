import axios from "axios";

const API_KEY = 'RznIehdOF4W57uWXw3qFMgWDbDMdsriZNPT9IdEEeT4';

axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.params = {
    per_page:12,
    client_id: API_KEY,
} 

export const fetchImages = async ({query, page = 1 , per_page = 15}) => {
    try {
        const { data } = await axios.get('search/photos',{
            params:{
                query,
                page,
                per_page,
            }
        })
        return data.results;
    } catch (error) {
        console.error('Error fetching images:', error);
        return []
    }
}