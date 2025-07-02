export interface OrderModel{
    filmId: number
        pricePerItem: number
        title: string
        count: number
        status: 'ordered' | 'paid' | 'cancelled',
        rating: null | number
        theater: string
}