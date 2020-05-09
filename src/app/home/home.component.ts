import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchedText:string
  constructor() { 
    this.searchedText = ''
  }

  ngOnInit(): void {
    
  }
  
  

  trees=["apple","Mango","banana"]
  // roads=["Road A","ROAD B","ROAD C"]

  keyDownFunction(event) {
    if(event.keyCode == 13) {
      alert('you just clicked enter'+ this.searchedText);
      // rest of your code
    }
  }  
}

