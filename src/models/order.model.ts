export interface OrderModel{
    filmId: number
        pricePerItem: string
        title: string
        count: number
        status: 'ordered' | 'paid' | 'cancelled',
        rating: null | number
}