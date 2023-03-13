import type Dish from "./dish";

export default class Order {
    id: string;
    dish: Dish;
    user: string;
    date: Date;
    payment_received: boolean;

    constructor(dish: Dish, user: string, date: Date) {
        this.id = "";
        this.dish = dish;
        this.user = user;
        this.date = date;
        this.payment_received = false;
    }
}