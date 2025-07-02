export interface UserModel{
    email: string
    password: string
    orders: {
        filmId: number
        pricePerItem: string
        title: string
        count: number
        status: 'ordered' | 'paid' | 'cancelled',
        rating: null | number
        

    }[]
}