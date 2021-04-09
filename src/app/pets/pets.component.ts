import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {
  theme: string = 'main-theme';
  constructor() { }

  ngOnInit(): void {
    document.body.classList.toggle(this.theme);
  }

}
