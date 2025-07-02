import { OrderModel } from "../models/order.model"
import { UserModel } from "../models/user.model"

export class UserService {

    static retrieveUsers(): UserModel[] {
        if (!localStorage.getItem('users')) {
            const arr: UserModel[] = [
                {
                    email: 'user@example.com',
                    password: 'user123',
                    orders: []
                }
            ]

            localStorage.setItem('users', JSON.stringify(arr))
        }

        return JSON.parse(localStorage.getItem('users')!)

    }

    static login(email: string, password: string): boolean {

        for (let user of this.retrieveUsers()) {
            if (user.email === email && user.password === password) {
                localStorage.setItem('active', user.email)
                return true
            }
        }

        return false
    }

    static getActiveUser(): UserModel | null {
        if (!localStorage.getItem('active'))
            return null
        for (let user of this.retrieveUsers()) {
            if (user.email === localStorage.getItem('active')) {
                return user
            }
        }
        return null
    }


    static createOrder(order: OrderModel) {

        const arr = this.retrieveUsers()
        for (let user of arr) {
            if (user.email == localStorage.getItem('active')) {
                user.orders.push(order)
                localStorage.setItem('users', JSON.stringify(arr))
                return true
            }
        }

        return false

    }


    static changePassword(newPassword: string): boolean {

        const arr = this.retrieveUsers()
        for (let user of arr) {
            if (user.email == localStorage.getItem('active')) {
                user.password = newPassword
                localStorage.setItem('users', JSON.stringify(arr))
                return true
            }
        }

        return false
    }
}