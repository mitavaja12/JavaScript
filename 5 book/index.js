class Book {
    title;
    #author;
    #price;
    #rentalPrice;
    #copiesAvailable;

    constructor(title, author, price, rentalPrice, copiesAvailable) {
        this.title = title;
        this.#author = author;
        this.#price = price;
        this.#rentalPrice = rentalPrice;
        this.#copiesAvailable = copiesAvailable;
    }

    getauthor() {
        return this.#author;
    }

    getprice() {
        return this.#price;
    }

    getrentalPrice() {
        return this.#rentalPrice;
    }

    getcopiesAvailable() {
        return this.#copiesAvailable;
    }

    setauthor(author) {
        this.#author = author;
    }

    setprice(price) {
        this.#price = price;
    }

    setrentalPrice(rentalPrice) {
        this.#rentalPrice = rentalPrice;
    }

    setcopiesAvailable(copiesAvailable) {
        this.#copiesAvailable = copiesAvailable;
    }

    buyBook(copies) {
        if (this.#copiesAvailable >= copies) {
            this.#copiesAvailable -= copies;
            console.log(`You have successfully purchased ${copies} copies of "${this.title}".`);
        } else {
            console.log(`Purchase failed: Only ${this.#copiesAvailable} copies of "${this.title}" are available.`);
        }
    }

    rentBook() {
        if (this.#copiesAvailable > 0) {
            this.#copiesAvailable--;
            console.log(`You have rented a copy of "${this.title}".`);
        } else {
            console.log(`Rent failed: No copies of "${this.title}" are available.`);
        }
    }

    returnBook() {
        this.#copiesAvailable++;
        console.log(`Thank you for returning "${this.title}" copies.`);
    }

    checkAvailability() {
        console.log(`There are currently ${this.#copiesAvailable} copies of "${this.title}" available.`);
    }
}

const newBook = new Book("Rich Dad Poor Dad", "Robert Kiyosaki", 300, 120, 10);

console.log(`Book Details:\nTitle: ${newBook.title}\nAuthor: ${newBook.getauthor()}\nPrice: ${newBook.getprice()}\nRental Price: ${newBook.getrentalPrice()}\nCopies Available: ${newBook.getcopiesAvailable()}`);

newBook.buyBook(2);
newBook.checkAvailability();

newBook.rentBook();
newBook.checkAvailability();

newBook.returnBook();
newBook.checkAvailability();
