import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ImageService } from './services/image.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageListComponent } from './image-list/image-list.component';
import { MapasComponent } from './mapas/mapas.component';
import { StoreModule } from '@ngrx/store';
import { countRedu, mainReducer } from './reducer/datos.reducer';

const appRoutes: Routes = [{ path: '', component: ImageListComponent }];

@NgModule({
  declarations: [AppComponent, ImageListComponent, MapasComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot({ imagen: countRedu, main: mainReducer}),
  ],
  providers: [ImageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
