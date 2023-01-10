import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSentence]'
})
export class SentenceDirective {

  @Input('ratio') parallaxRatio: number = 1
  initialTop: number = 0

  constructor(private eleRef: ElementRef) {
    this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top
  }

  

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event: any) {
    this.eleRef.nativeElement.style.opacity=0;
    
    

    this.eleRef.nativeElement.style.top = (this.initialTop - (window.scrollY * this.parallaxRatio)) + 'px'
    if (Number(this.eleRef.nativeElement.style.top.substring(0, this.eleRef.nativeElement.style.top.length-2))>-380) {
        this.eleRef.nativeElement.style.opacity="1";
        this.eleRef.nativeElement.style.animation = "fadeIn 1s linear";
        
        
    } else {
        this.eleRef.nativeElement.style.animation = "fadeOut 1s linear";
    }

  }

}