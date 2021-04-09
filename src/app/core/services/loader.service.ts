import { HttpRequest } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  onLoadingChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  private requests: HttpRequest<any>[] = [];

  get isLoading(): boolean {
    return this.requests.length !== 0;
  }

  onStarted(request: HttpRequest<any>): void {    
    this.requests.push(request);
    this.notify();
  }

  onFinished(request: HttpRequest<any>): void {    
    const index = this.requests.indexOf(request);
    if (index !== -1) {
      this.requests.splice(index, 1);
    }
    this.notify();
  }

  private notify(): void {
    this.onLoadingChanged.emit(this.requests.length !== 0);
  }

}
