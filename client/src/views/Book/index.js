import React from "react";
import "./style.css";


const Book = () => {

    return (
      <div className="viewFour" id="book">
        <div className="row book-cont">
          <div className="book-r">
          {/* <h3 className="viewTitle" id="bookTitle">BOOK NOW</h3> */}
          <iframe height="866px" width="500px" src="https://booking.mangomint.com/demonails"></iframe>
          </div>
        </div>
      </div>
    );
}

export default Book;