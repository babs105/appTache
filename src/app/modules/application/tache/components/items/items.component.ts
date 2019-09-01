import { Component, OnInit } from '@angular/core';
import { TacheService } from '../../services/tache.service';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';

const STATE_KEY_ITEMS = makeStateKey('items');

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  taches: any[];
  constructor(
    private state: TransferState,
    private tacheService: TacheService,
    @Inject(PLATFORM_ID) private platformId: object,
    @Inject(APP_ID) private appId: string) {}

  ngOnInit() {
    this.getTaches();
  }


  getTaches() {

    this.taches = this.state.get(STATE_KEY_ITEMS, <any> []);
    if (this.taches.length === 0) {
      this.tacheService.getTaches()
        .subscribe((data: { status: string, response: any[] }) => {
          const platform = isPlatformBrowser(this.platformId) ?
            'in the browser' : 'on the server';
          console.log(`getUsers : Running ${platform} with appId=${this.appId}`);
          this.taches = data.response;
          this.state.set(STATE_KEY_ITEMS, <any> data.response);
        });
    }
  }
}
