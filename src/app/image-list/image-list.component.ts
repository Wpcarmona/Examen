import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ImageService } from '../services/image.service';
import * as action from '../reducer/datos.actions'


@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})

export class ImageListComponent implements OnInit {
  images: any[] = [];
  searchQuery: string = "";
  photo: string = "";
  count$ : Observable<any>
  constructor(
    private imageService: ImageService,
    private router: Router,
    private store: Store<{ count: number}>
    ) {
      this.count$ = store.select('count')
     }

    ngOnInit() {
     this.count$ = this.store.pipe(select('count'))
    }

  getImages(busqueda: string) {

    this.imageService.share(busqueda).subscribe(result => {
      this.images = result["hits"];
      console.log(this.images)
    })

  }

  viewPhoto(image: string) {
    this.photo = image;
    this.store.dispatch(action.datos({image: image}))
  }

  infoImage(image:any[]){
    console.log(image)
  }


  getCategory(category:string){
    this.imageService.category(category).subscribe(result =>{
      this.images = result["hits"]
      console.log(this.images)
    })
  }

  mapa(){
    this.router.navigate(['mapa'])
  }


}
