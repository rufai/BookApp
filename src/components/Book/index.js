import PropTypes from 'prop-types';
import { useState } from 'react';
/**
 * Title
 * Author
 * Price
 * Short Description
 * Image
 * @returns 
 */
const Book = (props) => {
    // const [count, setCount] = useState(0);

    const {
        id,
        saleInfo: {retailPrice},
        volumeInfo: {
        title,
        authors,
        description,
        imageLinks: {thumbnail}
        }
    } = props.book;
    
    return (
        <section>
            <img src={thumbnail} alt="thumbnail" />
            <section>
                <h2 title={title}>{title}</h2>
                <p> 
                    by { authors ? authors.join(', ') : "No Authors Listed" }
                </p>
                <p>

                </p>
            </section>
        </section>
    )
}

Book.propTypes = {
    volumeInfo : PropTypes.shape({title : PropTypes.string.isRequired}),
    authors : PropTypes.array.isRequired,
    description : PropTypes.string,
    price : PropTypes.number.isRequired
}

Book.defaultProps = { description: "No description…"};

export default Book;