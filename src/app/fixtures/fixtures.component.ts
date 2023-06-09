import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.scss']
})
export class FixturesComponent implements OnInit {

  constructor(private Apiservice:ApiService,private location: Location) { }
  matchday17:any=[]
  matchday18:any=[]
  matchday19:any=[]

  ngOnInit(): void {
    this.matchday17=[];
    this.matchday18=[];
    this.matchday19=[];
    this.Apiservice.fixture().subscribe((result:any)=>{
      console.log("response",result[0])
      this.matchday17=result[0][" Matchday 18 "]
      this.matchday18=result[0][" Matchday 19 "]
      this.matchday19=result[0][" Matchday 20 "]
    });
    const currentUrl = this.location.path();
console.log(currentUrl);

  }
asa(){}


}
