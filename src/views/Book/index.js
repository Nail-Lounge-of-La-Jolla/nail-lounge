import React from "react";
import "./style.css";
import ResumePDF from "../../components/ResumePDF/Full-Stack-Resume-Jo Hill.pdf";

function Book() {

    return (
      <div className="viewFour" id="book">
        <div className="row">
          <div className="col-md">
            <a href={ResumePDF} target="_blank" className="resLink"><h3 className="viewTitle" id="bookTitle">BOOK NOW</h3></a>
          </div>
        </div>
      </div>
    );
}

export default Book;