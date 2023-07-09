import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
})
export class CarouselComponent implements AfterViewInit {
  @ViewChild('scroller') scroller!: ElementRef;
  @Input() items: number[] = [];
  scrollerWidth!: number;

  ngAfterViewInit() {
    this.scrollerWidth =
      this.scroller.nativeElement.querySelector('.item').clientWidth * 3;
  }

  scrollToNextItem() {
    this.scroller.nativeElement.scrollBy({
      left: this.scrollerWidth,
      top: 0,
      behavior: 'smooth',
    });
  }

  scrollToPrevItem() {
    this.scroller.nativeElement.scrollBy({
      left: -this.scrollerWidth,
      top: 0,
      behavior: 'smooth',
    });
  }
}
