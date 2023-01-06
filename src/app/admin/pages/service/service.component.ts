import { Component, Injector, OnInit } from '@angular/core';
import  { createCustomElement } from '@angular/elements';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor(private inject:Injector) { 
    
  }

  ngOnInit(): void {
  }
}
