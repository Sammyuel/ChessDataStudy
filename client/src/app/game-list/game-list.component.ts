import { Component, OnInit, OnDestroy } from '@angular/core';
import { gameItem } from '../games/game';
import { gameService } from '../games/games.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
  providers: [gameService]
})
export class GameListComponent implements OnInit, OnDestroy {
  private req: any;
  public current: any;
  public checked: boolean;
  gameList: [gameItem];
  constructor(private _game:gameService) { 
  }

  onChange(curr) {
    this.current = curr.gameembed; 
    this.checked = true;
  }	

  getcurrent(){
  	return this.current;
  }

  ngOnInit() {
  	this.req = this._game.list().subscribe(data=>{
  		this.gameList = data as [gameItem];
  	})
  }
  ngOnDestroy(){
  	this.req.unsubscribe()
  }
  getEmbedUrl(item){
    return item.embed 

  }
  getgameUrl(item){
  	return item.gameembed

  }
  onClicked(game: gameItem){
  	game.clicked = !game.clicked;
  }


}




