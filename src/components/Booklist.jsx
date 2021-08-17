import React from "react";
import ReactDOM from 'react-dom';

const Booklist = () => {
    return (
        <div className="booklist">
            <Book image="https://images-na.ssl-images-amazon.com/images/I/81lsmyMcYNL._AC_UL200_SR200,200_.jpg" title="American Marxism" author="Mark R. Levin " />
            <Book image="https://images-na.ssl-images-amazon.com/images/I/81GqtNbs%2BPL._AC_UL200_SR200,200_.jpg" title="Billy Summers" author="Stephen King" />
            <Book image="https://images-na.ssl-images-amazon.com/images/I/81lsmyMcYNL._AC_UL200_SR200,200_.jpg" title="American Marxism" author="Mark R. Levin " />
            <Book image="https://images-na.ssl-images-amazon.com/images/I/81lsmyMcYNL._AC_UL200_SR200,200_.jpg" title="American Marxism" author="Mark R. Levin " />
            <Book image="https://images-na.ssl-images-amazon.com/images/I/81lsmyMcYNL._AC_UL200_SR200,200_.jpg" title="American Marxism" author="Mark R. Levin " />
            <Book image="https://images-na.ssl-images-amazon.com/images/I/81lsmyMcYNL._AC_UL200_SR200,200_.jpg" title="American Marxism" author="Mark R. Levin " />
            <Book image="https://images-na.ssl-images-amazon.com/images/I/81lsmyMcYNL._AC_UL200_SR200,200_.jpg" title="American Marxism" author="Mark R. Levin " />
        </div>
    );
};

const Book = (props) => {
    const showTitle = () => {
        console.log(props.title);
    };

    const deleteBook = (e) => {
        e.target.closest(".book").remove();
    };

    return (
        <div className="book" onMouseOver={()=> {
            console.log(props.title);
        }}>
            <div>
                <img src={props.image} onClick={deleteBook} />
            </div>
            <p className="title" onClick={showTitle}>{props.title}</p>
            <p className="author">{props.author}</p>
        </div>
    );
};

export default Booklist;