import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const translate:any = document.querySelectorAll(".translate");
    const big_title:any = document.querySelector(".big-title");
    const header:any = document.querySelector("header");
    const shadow:any = document.querySelector(".shadow");
    const content:any = document.querySelector(".content");
    const section:any = document.querySelector("section");
    const image_container:any = document.querySelector(".imgContainer");
    const opacity:any = document.querySelectorAll(".opacity");
    const border:any = document.querySelector(".border");

    let header_height = header.offsetHeight;
    let section_height = section.offsetHeight;
    
    window.addEventListener('scroll',() =>{
      let scroll = window.pageYOffset;
      let sectionY = section.getBoundingClientRect();

      for (const timelineEl of translate) {
        if (timelineEl instanceof HTMLElement) {
          const speed:any = timelineEl.dataset.speed;
          console.log(speed)
          timelineEl.style.transform = `translateY(${scroll * speed}px)`;
        }
      } 
      for (const element of opacity){
        element instanceof HTMLElement
        element.style.opacity = scroll / (sectionY.top + element.height);
        
    } 
    big_title.style.opacity = - scroll / (header_height / 2) + 1;
    shadow.style.height = `${scroll * 0.5 + 300}px`;

    content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
    image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;

    border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;
        
  })

}
}
