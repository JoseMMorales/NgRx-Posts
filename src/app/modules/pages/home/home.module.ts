import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { OneValidatorPipe } from './pipes/one-validator.pipe';
import { PasswordSecureDirective } from './directives/password-secure.directive';

import { HomePageComponent } from './page/home-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  declarations: [HomePageComponent, LoginFormComponent],
  imports: [
    HomeRoutingModule,
    SharedModule,
    OneValidatorPipe,
    PasswordSecureDirective,
  ],
})
export class HomeModule {}
