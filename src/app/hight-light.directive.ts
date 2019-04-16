import { Directive, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHightLight]'
})
export class HightLightDirective {

  constructor(private elRef: ElementRef, private renderer : Renderer2) { }
  ngOnInit(){
    this.renderer.setStyle( this.elRef.nativeElement, "background-color", "red");
  }
@HostListener('mouseenter') mouseEnterEvent( evenData : Event){
  this.renderer.setStyle( this.elRef.nativeElement, "background-color", "red");
}
@HostListener('mouseleave') mouseLeaveEvent( evenData : Event){
  this.renderer.setStyle( this.elRef.nativeElement, "background-color", "transparent");
}

}
