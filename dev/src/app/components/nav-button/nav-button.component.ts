import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss'],
})

export class NavButtonComponent implements OnInit {
  @Input() page: String;

  constructor(private router: Router) { }

  ngOnInit() {}

  goToPage(): void {
    console.log(this.page);
    this.router.navigate([this.page]);
  }
}