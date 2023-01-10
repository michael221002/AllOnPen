import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPicture]'
})
export class PictureDirective {

  @Input('factor') parallaxFactor: number = 1
  initialTop: number = 0

  constructor(private eleRef: ElementRef) {
    this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top;
  }

  

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event: any) {
    console.log(this.eleRef.nativeElement.style.top)
    this.eleRef.nativeElement.style.top = (this.initialTop/50 - (window.scrollY * this.parallaxFactor)) + 'px';
  }

}