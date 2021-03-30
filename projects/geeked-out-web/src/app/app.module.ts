import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from '@web-store/reducers';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComicsService } from '@web-services/comics.service';
import { AppEffects } from '@web-store/effects/main.effects';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    EffectsModule.forRoot([AppEffects]),
  ],
  providers: [ComicsService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
