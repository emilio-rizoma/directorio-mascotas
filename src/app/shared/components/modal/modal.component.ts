import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DialogService, DialogRequest } from 'src/app/core/services/dialog.service'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  data: DialogRequest | null = null;
  subscriptions: Subscription[] = [];
  constructor(
    private dialogService: DialogService
  ) { }

  ngOnInit() {
    const sub = this.dialogService.watch().subscribe(res => this.data = res);
    this.subscriptions.push(sub);
  }

  close() {
    this.dialogService.close();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }
}
