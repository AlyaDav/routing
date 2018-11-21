export class Item {
    title: string;
    price: number;
    about: string;
    username: string;
    sellerId: string;
    _id: string;

    constructor(title, price, about, username) {
        this.title = title;
        this.price=price;
        this.about=about;
        this.username=username;
        this.sellerId=null;
    }
}
