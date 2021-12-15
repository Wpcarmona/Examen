import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})

export class ImageListComponent implements OnInit {
  images: any[] = [];
  searchQuery: string = "";
  imagesFound = false;
  searching = false;
  photo: string = "";
  title = 'Pixabay';
  constructor(
    private imageService: ImageService,
    private router: Router
    ) { }

    ngOnInit() {
  
    }

  getImages(busqueda: string) {

    this.imageService.share(busqueda).subscribe(result => {
      this.images = result["hits"];
      console.log(this.images)
    })

  }

  viewPhoto(photo: string) {
    this.photo = photo;
  }

  getCategory(category:string){
    this.imageService.category(category).subscribe(result =>{
      this.images = result["hits"]
    })
  }

  mapa(){
    this.router.navigate(['mapa'])
  }

}
