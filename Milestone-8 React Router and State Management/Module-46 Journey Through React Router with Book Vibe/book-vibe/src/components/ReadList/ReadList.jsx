import Card from "../Card/Card";

const ReadList = ({ myReadList }) => {
    return (
        <div>
            {
                myReadList.length === 0 ?
                    <p>Nothing is Here</p>
                    :
                    <div>
                        {
                            myReadList.map(book => <Card key={book.bookId} book={book}></Card>)
                        }
                    </div>
            }
        </div>
    );
};

export default ReadList;