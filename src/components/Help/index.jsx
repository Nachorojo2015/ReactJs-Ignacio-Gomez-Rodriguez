import "./style.css"
import "./accordion.js"
import { useEffect } from "react";

const Help = () => {

  useEffect(() => {
    var acc = document.getElementsByClassName("accordion");

    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        this.parentElement.classList.toggle("active");
    
        var pannel = this.nextElementSibling;
    
        if (pannel.style.display === "block") {
          pannel.style.display = "none";
        } else {
          pannel.style.display = "block";
        }
      });
    }
  }, [])
  

  return (
    <>
      <div className="wrapper">
        <p>The Begninning of a New Asset class</p>
        <h1 className="text-3xl">Frequently Asked Questions</h1>

        <div className="faq">
          <button className="accordion">
            What is Krushi?
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <div className="pannel">
            <p>
              Krushi is a Public Charitable Trust designed to carry out farming on
              extensive scale Natural & Sustainable methods.
            </p>
          </div>
        </div>

        <div className="faq">
          <button className="accordion">
            How does it work?
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <div className="pannel">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
              saepe molestiae distinctio asperiores cupiditate consequuntur dolor
              ullam, iure eligendi harum eaque hic corporis debitis porro
              consectetur voluptate rem officiis architecto.
            </p>
          </div>
        </div>

        <div className="faq">
          <button className="accordion">
            What are the major challanges of current agriculture?
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <div className="pannel">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
              saepe molestiae distinctio asperiores cupiditate consequuntur dolor
              ullam, iure eligendi harum eaque hic corporis debitis porro
              consectetur voluptate rem officiis architecto.
            </p>
          </div>
        </div>

        <div className="faq">
          <button className="accordion">
            How does the Krushi address the above challanges?
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <div className="pannel">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
              saepe molestiae distinctio asperiores cupiditate consequuntur dolor
              ullam, iure eligendi harum eaque hic corporis debitis porro
              consectetur voluptate rem officiis architecto.
            </p>
          </div>
        </div>

        <div className="faq">
          <button className="accordion">
            How can I be a part of Krushi?
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <div className="pannel">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
              saepe molestiae distinctio asperiores cupiditate consequuntur dolor
              ullam, iure eligendi harum eaque hic corporis debitis porro
              consectetur voluptate rem officiis architecto.
            </p>
          </div>
        </div>

        <div className="faq">
          <button className="accordion">
            How does it work?
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <div className="pannel">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
              saepe molestiae distinctio asperiores cupiditate consequuntur dolor
              ullam, iure eligendi harum eaque hic corporis debitis porro
              consectetur voluptate rem officiis architecto.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export { Help }