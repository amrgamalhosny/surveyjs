import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("dashboard");
  }
  selectedCities: string[] = [];

    selectedCategories: string[] = ['Technology', 'Sports'];
    
    checked: boolean = false;
}
