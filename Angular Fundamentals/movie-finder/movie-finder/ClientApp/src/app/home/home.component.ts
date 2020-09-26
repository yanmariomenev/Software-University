import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit{
  @ViewChild('form', {static: false})searchForm: NgForm;

  query: any;
  constructor(private router: Router){}

  ngOnInit(){

  }

  search(){
    const query = this.searchForm.value.query;
    this.router.navigate(['/movies/search'], {queryParams: {search: query}});
  }
}
