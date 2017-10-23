import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { gameItem } from '../games/game';
import { gameService } from '../games/games.service';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css'],
  providers: []
})
export class SearchDetailComponent implements OnInit, OnDestroy {
   private routeSub:any;
   private req: any;
   query: string;
   gameList: [gameItem];

   

  constructor(private route: ActivatedRoute, private _game:gameService) { }

  ngOnInit() {
      this.routeSub = this.route.params.subscribe(params=>{
          this.query = params['q']
           this.req = this._game.search(this.query).subscribe(data=>{
              this.gameList = data as [gameItem];
            })
      })
  }

  ngOnDestroy(){
      this.routeSub.unsubscribe()
      this.req.unsubscribe()
  }

  getEmbedUrl(item){
    return 'https://www.youtube.com/embed/' + item.embed + '?ecver=2'
  }

  
}
