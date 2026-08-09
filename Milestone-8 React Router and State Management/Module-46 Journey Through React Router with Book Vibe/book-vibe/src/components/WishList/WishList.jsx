import Card from "../Card/Card";

const WishList = ({ myWishList }) => {
    return (
        <div>
            {
                myWishList.length === 0 ?
                    <p>Nothing is Here</p>
                    :
                    <div>
                        {
                            myWishList.map(book => <Card key={book.bookId} book={book}></Card>)
                        }
                    </div>
            }
        </div>
    );
};

export default WishList;