import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { CoreModule } from './modules/core/core.module';
import { SharedModule } from './modules/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { appReducer } from './modules/core/app.state';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from './modules/core/store/posts/posts.effect';

import { AppComponent } from './app.component';
import { NavbarComponent } from './modules/shared/components/navbar/navbar.component';
import { LoadingComponent } from './modules/shared/components/loading/loading.component';

const ANGULAR_MODULES = [
  CoreModule,
  SharedModule,
  BrowserAnimationsModule,
  BrowserModule,
  AppRoutingModule,
  CommonModule,
];

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    ...ANGULAR_MODULES,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
    }),
    EffectsModule.forRoot([PostsEffects]),
    NavbarComponent,
    LoadingComponent,
  ],
})
export class AppModule {}
