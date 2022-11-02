import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
    
  }
  
  onSearch(value: string): void {
  
      this._router.navigate(['/character-list'],{
        queryParams: value.length > 1 ? { q:value} : {q:""}
        
      })

    
    
  }

}
