import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-and-cards',
  templateUrl: './table-and-cards.component.html',
  styleUrls: ['./table-and-cards.component.css']
})
export class TableAndCardsComponent implements OnInit {

  constructor() { }
  Ourid:any = 0;
  ngOnInit(): void {
  }
  tableData:any[]=[
    {id:1,name:'Rohan',age:'AA4230928',email:'DigiGST'},
    {id:1,name:'Rohan',age:'AA3238928',email:'DigiGST'},
    {id:1,name:'Rohan',age:'AA5530928',email:'DigiGST'},
    {id:2,name:'Kamlesh',age:'SS62008938',email:'ksSPARX'},
    {id:2,name:'Kamlesh',age:'SS52238938',email:'ksSPARX'},
    {id:2,name:'Kamlesh',age:'SS42006578',email:'ksSPARX'},
    {id:3,name:'Shyam',age:'kk2989823',email:'CustomGST'},
    {id:3,name:'Shyam',age:'kk4989823',email:'CustomGST'},
    {id:3,name:'Shyam',age:'kk6989823',email:'CustomGST'},
  ]
}
