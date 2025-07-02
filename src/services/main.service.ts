import axios from 'axios';

const client = axios.create({
    baseURL: '',
    headers: {
        'Accept': 'application/json',
        'X-Client-Name': 'KVA/2025'
    },
    validateStatus: (status: number) => {
        return status === 200 
    }
})

export class FilmService {
    static async getFilmovi() {
        return axios.get('https://api.themoviedb.org/3/movie/popular?api_key=38faa479a55dfce6e44a6a0c87f8819d');
      
    }
        static async getFilmoviById(id: number) {
        return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=38faa479a55dfce6e44a6a0c87f8819d`);
    }

}






