import { Directive, ElementRef, HostListener, Input } from '@angular/core'

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') newColor: string

  constructor(private el: ElementRef) {
    console.log('Directiva llamada')
  }

  @HostListener('mouseenter') mouseIn() {
    this.highlighted(this.newColor || 'yellow')
  }

  @HostListener('mouseleave') mouseOut() {
    this.highlighted(null)
  }

  private highlighted(color: string) {
    this.el.nativeElement.style.backgroundColor = color
  }
}
