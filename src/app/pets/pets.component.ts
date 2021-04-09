import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { LoaderService } from '../core/services/loader.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit, OnDestroy {
  theme: string = 'main-theme';
  subs: Subscription[] = [];
  isLoading = false;
  
  constructor(
    private loaderService: LoaderService,
    private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('My Pet Directory');
    document.body.classList.toggle(this.theme);
    const sub = this.loaderService.onLoadingChanged.pipe(
      delay(0.5),
      map(res => res)
    ).subscribe(isLoading => this.isLoading = isLoading);
    this.subs.push(sub);
  }
  
  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }

}
