import { Component, OnInit,Renderer2 } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  constructor(private render:Renderer2) { }

  ngOnInit(): void {
  }
  id: any = '';
  accordion(param: any) {
    const cl = document.getElementById(param)?.firstChild?.firstChild;
    // console.log(cl);
    
    if (this.id == param) { 
      this.id = ''; //id =f1
      this.render.addClass(cl,"fa-plus")
      this.render.removeClass(cl,"fa-minus")
    } else {
      this.id = param; //
      this.render.removeClass(cl,"fa-plus")
      this.render.addClass(cl,"fa-minus")
    }
  }
  


}
