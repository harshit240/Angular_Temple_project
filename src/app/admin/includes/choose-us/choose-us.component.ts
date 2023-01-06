import { Component, HostListener, OnInit } from '@angular/core';
import { Scroll } from '@angular/router';

@Component({
  selector: 'app-choose-us',
  templateUrl: './choose-us.component.html',
  styleUrls: ['./choose-us.component.css'],
})
export class ChooseUsComponent implements OnInit {
  constructor() {}
  staffCount: number = 0;
  totalproject:number=0;
  ngOnInit(): void {}

  @HostListener('scroll', ['$event']) 
  
  scrollHandler(params: any) {
          console.debug("Scroll Event");
  }
  staffCountStop: any = setInterval(() => {
    const s = document.querySelector('.why_choose_section1');
    // console.log(s);
    // s?.scrollIntoView({
    //   behavior: 'smooth',
    //   block: 'start',
    //   inline: 'nearest',
    // });
    // console.log(s);
    this.staffCount++;
    if (s && this.staffCount == 40) {
      // console.log('Completed');
      clearInterval(this.staffCountStop);
    }
  }, 200);

  projectStop: any = setInterval(() => {
    const s = document.querySelector('.why_choose_section1');
    // console.log(s);
    // s?.scrollIntoView({
    //   behavior: 'smooth',
    //   block: 'start',
    //   inline: 'nearest',
    // });
    // console.log(s);
    this.totalproject++;
    if (s && this.totalproject == 100) {
      // console.log('Completed');
      clearInterval(this.projectStop);
    }
  }, 100);

  
}
