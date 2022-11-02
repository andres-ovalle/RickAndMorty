import { Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { filter, Observable, take, tap } from 'rxjs';
import { Character } from 'src/app/models/interface/character';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CaptureId } from 'src/app/models/interface/captureID';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss'],

})

export class CardDetailsComponent implements OnInit, OnChanges{


  
  //private query = +1
  public  characterToShow?: Character | any;
  public characterList: Character[] = []



  constructor(
    private _rickAndMortyService: RickAndMortyService,
    private route: ActivatedRoute,
    public dialogRef: MatDialogRef<CardDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    dialogRef: MatDialogRef<CardDetailsComponent>

  }
  
  caracterSelected = this.data.id
  
  ngOnInit(): void {
    this.getCharacterId()

  }
ngOnChanges(): void {
  this.getCharacterId()
}
  

  getCharacterId() {
    
    const id =this.caracterSelected

     this._rickAndMortyService.getSingleSharacter(id).pipe(take(1)).subscribe( 
        x => {
          console.log("esto es x: ", x)
          this.characterToShow = x
          


        }
      );
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}


/*
this._rickAndMortyService.getSingleSharacter(this.query)
.pipe(take(1))
  .subscribe(
    (resul: any) => {
      console.log("esto va aqui")
      if (resul?. results?.length){
      console.log(resul)
      const { info, results } = resul
      this.character = [...this.character, ...results]
      }else{
        this.character= []
      }
    }
  );*/
