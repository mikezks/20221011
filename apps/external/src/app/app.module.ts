import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, DoBootstrap } from '@angular/core';
import { ExternalDashboardTileComponent } from './external-dashboard-tile/external-dashboard-tile.component';
import { createCustomElement } from '@angular/elements';
import { PushPipe } from './pipes/push.pipe';
import { PushModule } from '@ngrx/component';

@NgModule({
   imports: [
      HttpClientModule,
      BrowserModule,
      PushModule
   ],
   declarations: [
      ExternalDashboardTileComponent,
      PushPipe
   ],
   bootstrap: []
})
export class AppModule implements DoBootstrap {
    constructor(private injector: Injector) {
    }

    ngDoBootstrap() {
        const externalTileCE = createCustomElement(ExternalDashboardTileComponent, { injector: this.injector });
        customElements.define('external-dashboard-tile', externalTileCE);
    }

}
