import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreDataModule } from '@src/core-data';
import { CoreStateModule } from '@src/core-state';
import { MaterialModule } from '@src/material';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing.module';
import { WidgetDetailsComponent } from './widgets/widget-details/widget-details.component';
import { WidgetsListComponent } from './widgets/widgets-list/widgets-list.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { UiToolbarModule } from '@src/ui-toolbar';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WidgetDetailsComponent,
    WidgetsComponent,
    WidgetsListComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CoreDataModule,
    CoreStateModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    RoutingModule,
    UiToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
