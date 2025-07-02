import { TheaterModel } from "../models/theater.model";

export class TheaterService {
    static getTheater(): TheaterModel[]{
        return [
            {
                id : 1,
                name : 'Cinegrand',
                countryOfOrigin: 'Serbia',
                website: 'https://rakovica.cinegrand-mcf.rs/'
            },
            {
                id : 2,
                name : 'Cineplexx',
                countryOfOrigin: 'Serbia',
                website: 'https://www.cineplexx.rs/'
            },
            {
                id : 3,
                name : 'Tuckwood',
                countryOfOrigin: 'Serbia',
                website: 'https://www.tuck.rs/'
            },
            {
                id : 4,
                name : 'Roda Cineplex',
                countryOfOrigin: 'Serbia',
                website: 'http://www.rodacineplex.com/'
            },
        ]
    }
}