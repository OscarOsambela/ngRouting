import { Directive,Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class AttrDirective {

  @Input() defaultColor = '';
  @Input('appHighLight') highLightColor = '';
  
  constructor(private elementRef: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    this._cambiarColor(this.highLightColor || this.defaultColor || 'tomato', 'white')
  }

  @HostListener('mouseleave') onMouseLeave(){
    this._cambiarColor(null, null)
  }


  private _cambiarColor( backgroundColor: string | null, color: string | null){
    this.elementRef.nativeElement.style.backgroundColor = backgroundColor;
    this.elementRef.nativeElement.style.coloe = color; 
  }

  
}
