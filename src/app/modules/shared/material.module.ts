import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const Material = [
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatDialogModule,
  MatInputModule,
  MatButtonModule,
  CdkAccordionModule,
  MatIconModule,
  MatSelectModule,
  MatSnackBarModule,
];

@NgModule({
  exports: [Material],
  imports: [Material],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MaterialModule {}
