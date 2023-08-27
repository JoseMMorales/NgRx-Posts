import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { HomePageComponent } from './page/home-page.component';
import { OneValidatorPipe } from '../../core/pipes/one-validator.pipe';
import { PasswordSecureDirective } from '../../core/directives/password-secure.directive';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    HomeRoutingModule,
    SharedModule,
    OneValidatorPipe,
    PasswordSecureDirective,
  ],
})
export class HomeModule {}
