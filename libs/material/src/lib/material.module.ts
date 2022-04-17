import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  exports: [
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
})
export class MaterialModule {}
