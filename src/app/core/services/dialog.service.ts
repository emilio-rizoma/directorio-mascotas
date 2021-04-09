import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { DetailResponse } from 'src/app/shared/models/api.model';


export interface DialogRequest {
  content: DetailResponse | null;
  open: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  onActionChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  private dialogRequest: DialogRequest = { open: false, content: null};
  private display: BehaviorSubject<DialogRequest> = new BehaviorSubject(this.dialogRequest);

  constructor() { }

  get isVisible(): Observable<boolean> {
    return this.display.pipe(map(res => res.open == true));
  }

  watch(): Observable<DialogRequest> {
    return this.display.pipe(map(res => res));
  }

  open(detail: DetailResponse) {
    this.dialogRequest = { content: detail, open: true };
    this.display.next(this.dialogRequest);
  }

  close() {
    this.isVisible.pipe(take(1)).toPromise().then(res => {
      if (res) {
        this.dialogRequest.open = false;
      }
    })
    this.display.next(this.dialogRequest);
  }

}
