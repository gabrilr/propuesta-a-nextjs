"use client"; // for nextjs 13.4 user

import Link from "next/link";
import React from "react";
// import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import "../css/Carrusel.css";

const TrendingSlider = () => {
  const filteredItems = [
    {
      id: 1,
      img: "./img/home/curso1.png",
      description: "Por: Eduardo Ismael García Pérez",
      price: 200,
    },
    {
      id: 2,
      img: "./img/home/curso2.png",
      description: 'Por: Cynthia "La Matemaga" Castillo',
      price: 100,
    },
    {
      id: 3,
      img: "./img/home/curso3.png",
      description: "Por: Antonio Feregrino",
      price: 500,
    },
    {
      id: 4,
      img: "./img/home/curso4.png",
      description: "Por: Marines Méndez",
      price: 40,
    },
    {
      id: 5,
      img: "./img/home/curso5.png",
      description: "Por: Uriel Hernández",
      price: 140,
    },
    {
      id: 6,
      img: "./img/home/curso6.png",
      description: 'Por: Yesi Díaz',
      price: 140,
    },
  ];

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 235;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 235;
  };
  return (
    <>
    <article class="aprender-art">
        <div style={{width: '100%', display: 'flex', justifyContent: 'space-around', borderBottom: '1px solid #1A9CFF'}}>
            <h2 style={{color: '#0082E5'}}>
                &#11208; Cursos a mi ritmo
            </h2>
            <h2>
                &#128366; Con una guia
            </h2>
            <h2>
                &#128393; Talleres practicos
            </h2>
        </div>
        <div>
        <div className="trending">
        <div className="container">
          <div className="title-btns">
            <h3>Cursos principales</h3>
            <div className="btns">
              <button title="scroll left" onClick={slideLeft}>
              🡨
              </button>
              <button title="scroll right" onClick={slideRight}>
              🡪
              </button>
            </div>
          </div>
          <div className="row-container" id="slider">
            {filteredItems.map((item) => (
              <div key={item.id} className="row-item">
                <Link href={`/`} className="link">
                  <div className="item-header">
                    <img src={item.img} alt="product" />
                  </div>
                  <div className="item-description">
                    <p>{item.description}</p>
                    <p className="item-price">{item.price}$</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </article>
    </>
  );
};
export default TrendingSlider;

// import '../globals.css';

// export default function SectionMejoraFuturo() {
//     return (
//         <>
//         <article class="aprender-art">
//             <div style="width: 100%; display: flex; justify-content: space-around; border-bottom: 1px solid #1A9CFF;">
//                 <h2 style="color: #0082E5;">
//                     &#11208; Cursos a mi ritmo
//                 </h2>
//                 <h2>
//                     &#128366; Con una guia
//                 </h2>
//                 <h2>
//                     &#128393; Talleres practicos
//                 </h2>
//             </div>
//             <div>
//                 <div class="pagination">
//                     <h2 style=" font-weight: bold;">Cursos principales</h2>
//                     <div style="margin-left: 70%;">
//                         <button onclick="previousPage()">&#8592;</button>
//                         <button onclick="nextPage()">&#8594;</button>
//                     </div>
//                 </div>
//                 <div class="slide-container">
//                     {/* <!-- Página 1 --> 
//                     <div class="page active">
//                         <div class="image-container">
//                             <div>
//                                 <img src="./img/home/curso1.png" alt=""/>
//                             </div>
//                             <h2>Por: Eduardo Ismael García Pérez</h2>
//                             <a href="">Ir al curso &#8594;</a>
//                         </div>
//                         <div class="image-container">
//                             <div>
//                                 <img src="./img/home/curso2.png" alt=""/>
//                             </div>
//                             <h2>Por: Cynthia "La Matemaga" Castillo</h2>
//                             <a href="">Ir al curso &#8594;</a>
//                         </div>
//                         <div class="image-container">
//                             <div>
//                                 <img src="./img/home/curso3.png" alt="">
//                             </div>
//                             <h2>Por: Antonio Feregrino</h2>
//                             <a href="">Ir al curso &#8594;</a>
//                         </div>
//                     </div>
//                     {/* <!-- Página 2 --> 
//                     <div class="page">
//                         <div class="image-container">
//                             <div>
//                                 <img src="./img/home/curso4.png" alt=""/>
//                             </div>
//                             <h2>Por: Uriel Hernández</h2>
//                             <a href="">Ir al curso &#8594;</a>
//                         </div>
//                         <div class="image-container">
//                             <div>
//                                 <img src="./img/home/curso5.png" alt=""/>
//                             </div>
//                             <h2>Por: Yesi Díaz</h2>
//                             <a href="">Ir al curso &#8594;</a>
//                         </div>
//                         <div class="image-container">
//                             <div>
//                                 <img src="./img/home/curso6.png" alt=""/>
//                             </div>
//                             <h2>Por: Eduardo Ismael García Pérez</h2>
//                             <a href="">Ir al curso &#8594;</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </article>
        
//         </>);
// }