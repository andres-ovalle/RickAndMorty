import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Route, Router } from '@angular/router';
import { filter, take } from 'rxjs';
import { Character } from 'src/app/models/interface/character';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';
import {MatDialog} from '@angular/material/dialog';
import { CardDetailsComponent } from '../card-details/card-details.component';
import { CaptureId } from 'src/app/models/interface/captureID';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  public characterList: Character[] = []
  private query=""
  

  constructor(
    private _rickAndMortyService: RickAndMortyService,
    private route: ActivatedRoute,
    private _router :Router,
    public dialog: MatDialog,
  

  ) { 
    this.onUrlChange()
  }

  ngOnInit(): void {
    /**
     * consumir servivio
     */

    this.route.queryParams.pipe()
    .subscribe (params => {
      console.log(params['q'])
      this.query = params['q']
      this.getCharacter()

    })
    this.getCharacter()
  }

  onUrlChange(){
    this._router.events.pipe(
      filter((Event)=> Event instanceof NavigationEnd)
    ).subscribe(()=>{
      this.characterList = []
      this.getCharacter()
    })
  }

  openDialog(id :number ) {

    this.dialog.open(CardDetailsComponent,{data:{id:id}});

  }


  getCharacter() {
    this._rickAndMortyService.getCharacters(this.query)
    .pipe(take(1))
      .subscribe(
        (resul: any) => {
          if (resul?. results?.length){
          console.log(resul)
          const { info, results } = resul
          this.characterList = [...this.characterList, ...results]
          }else{
            this.characterList= []
          }
        }
      );
  }

}

