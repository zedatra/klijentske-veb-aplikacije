//import axios from "axios";

//export class MainService {
//    static async getMain(){
//        return axios.get('https://api.themoviedb.org/3/movie/popular?api_key=38faa479a55dfce6e44a6a0c87f8819d')
//    }
//}





import axios from 'axios';

const client = axios.create({
    baseURL: '',
    headers: {
        'Accept': 'application/json',
        'X-Client-Name': 'KVA/2025'
    },
    validateStatus: (status: number) => {
        return status === 200 //Samo ako je 200 vrati response, u ostalim slucajevima baci izuzetak
    }
})

export class FilmService {
    static async getFilmovi() {
        return axios.get('https://api.themoviedb.org/3/movie/popular?api_key=38faa479a55dfce6e44a6a0c87f8819d');
    }
    static async getFilmoviById(id: number) {

    }
}

//import axios from 'axios';
//
//const client = axios.create({
//  baseURL: 'https://api.themoviedb.org/3',
//  headers: {
//    'Accept': 'application/json',
//    'X-Client-Name': 'KVA/2025'
//  },
//  validateStatus: (status: number) => {
//    return status === 200; // Samo ako je 200 vrati response
//  }
//});
//
//export class FilmService {
//  static async getFilmovi(page: number = 1, sortBy: string = 'popularity.desc') {
//    return client.request({
//      url: '/discover/movie',
//      method: 'GET',
//      params: {
//        api_key: '38faa479a55dfce6e44a6a0c87f8819d',
//        page: page,
//        sort_by: sortBy
//      }
//    });
//  }
//
//  static async getFilmoviById(id: number) {
//    return client.request({
//      url: `/movie/${id}`,
//      method: 'GET',
//      params: {
//        api_key: '38faa479a55dfce6e44a6a0c87f8819d'
//      }
//    });
//  }
//}
