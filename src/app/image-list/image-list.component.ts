import {Component,OnInit,ViewChild,ElementRef,Renderer2} from '@angular/core';
import { Router } from '@angular/router';
import { Store, select} from '@ngrx/store';
import { Observable } from 'rxjs';
import { ImageService } from '../services/image.service';
import * as action from '../reducer/datos.actions';
import { Rect } from '../services/rect';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css'],
})
export class ImageListComponent implements OnInit {
  
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  ctx!: CanvasRenderingContext2D;
  requestId: any;
  rect: any;
  right = false;
  left = false;
  images: any[] = [];
  searchQuery: string = '';
  photo: string = '';
  mainChar$: Observable<any>;
  imagen$: Observable<any>;

  constructor(
    public render: Renderer2,
    private imageService: ImageService,
    private router: Router,
    private mainStore: Store<{ main: any }>,
    private imagenStore: Store<{ imagen: string }>
  ) {}

  ngOnInit() {
    this.imagen$ = this.imagenStore.pipe(select('imagen'));
    this.mainChar$ = this.mainStore.pipe(select('main'));
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.rect = new Rect(this.ctx, 0, 50, 100, 'red');
    setInterval(() => {
      this.draw();
    }, 1);
    this.render.listen('document', 'keydown', (e: any) => {
      if (e.key === 'ArrowRight') {
        this.right = true;
      } else if (e.key == 'ArrowLeft') {
        this.left = true;
      }
    });
    this.render.listen('document', 'keyup', (e: any) => {
      this.right = false;
      this.left = false;
    });
  }

  getImages(busqueda: string) {
    this.imageService.share(busqueda).subscribe((result) => {
      this.images = result['hits'];
      console.log(this.images);
    });
  }

  viewPhoto(
    link: string,
    comments: string,
    donwloads: string,
    likes: string,
    user: string
  ) {
    this.photo = link;
    this.imagenStore.dispatch(
      action.imagen({
        imagen: user,
        comments: comments,
        donwloads: donwloads,
        likes: likes,
      })
    );
    this.imagen$.subscribe((res) => {
      console.log(res);
    });
  }

  infoImage(image: any[]) {
    console.log(image);
  }

  getCategory(category: string) {
    this.imageService.category(category).subscribe((result) => {
      this.images = result['hits'];
      console.log(this.images);
    });
  }

  mapa() {
    this.router.navigate(['mapa']);
  }

  public draw(): void {
    this.ctx?.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(
      0,
      this.canvas.nativeElement.height - 40,
      this.canvas.nativeElement.width + 40,
      0
    );
    if (this.right) {
      this.rect.moveRight();
    } else if (this.left) {
      this.rect.moveLeft();
    }
    this.rect.draw();
    this.requestId = requestAnimationFrame(() => this.draw);
  }

  public normal() {
    this.mainStore.dispatch(action.normal());
    this.mainChar$.subscribe((res) => {
      console.log(res);
      this.rect.speed = res.speed;
      this.rect.w = res.w;
      this.rect.h = res.h;
      this.rect.color = res.color;
    });
  }

  public speed(s: number) {
    this.mainStore.dispatch(action.speed({ s }));
    this.mainChar$.subscribe((res) => {
      console.log(res);
      this.rect.speed = res.speed;
      this.rect.w = res.w;
      this.rect.h = res.h;
      this.rect.color = res.color;
    });
  }

  public slow(s: number) {
    this.mainStore.dispatch(action.slow({ s }));
    this.mainChar$.subscribe((res) => {
      console.log(res);
      this.rect.speed = res.speed;
      this.rect.w = res.w;
      this.rect.h = res.h;
      this.rect.color = res.color;
    });
  }
}
