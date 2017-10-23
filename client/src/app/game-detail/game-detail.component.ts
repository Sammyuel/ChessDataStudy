import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
  	
  }
  ngOnDestroy(){
  }
   getEmbedUrl(){
    return "https://lichess.org/embed/MPJcy1JW?theme=auto&bg=auto"
  }


}
