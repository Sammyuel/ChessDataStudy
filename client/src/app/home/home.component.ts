import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';


import { gameService } from '../games/games.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: []
})
export class HomeComponent implements OnInit{
    private req: any;
  constructor(private http:Http, private router:Router) { }

  ngOnInit() {

  }




}
