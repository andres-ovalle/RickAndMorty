import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { CharactersComponent } from './components/characters/characters.component';

const routes: Routes = [
  {path: 'character-list',component:CharactersComponent},
  {path: 'card-details', component:CardDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
