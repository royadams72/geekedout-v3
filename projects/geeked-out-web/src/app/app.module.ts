import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers, CustomSerializer } from '@web/store/reducers';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppEffects } from '@web/store/effects/main.effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterEffects } from '@web/store/effects/router.effects';
import { LoadingComponent } from './shared/components/ui/loading/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    EffectsModule.forRoot([AppEffects, RouterEffects]),
    StoreRouterConnectingModule.forRoot({serializer: CustomSerializer}),
  ],
  providers: [ { provide: Window, useValue: window }],
  bootstrap: [AppComponent]
})
export class AppModule { }
