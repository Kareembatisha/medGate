import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollAnimate]',
  standalone: true,
})
export class ScrollAnimateDirective implements OnInit {
  @Input() animationClass = 'animate__fadeInUp'; // default animation
  @Input() animationDelay = '0s'; // optional delay

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const element = this.el.nativeElement;

    // Set initial hidden state
    this.renderer.setStyle(element, 'opacity', '0');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(element, 'animate__animated');
            this.renderer.addClass(element, this.animationClass);
            this.renderer.setStyle(
              element,
              'animation-delay',
              this.animationDelay
            );
            this.renderer.setStyle(element, 'opacity', '1');
            observer.unobserve(element); // run only once
          }
        });
      },
      { threshold: 0.2 }
    ); // trigger when 20% visible

    observer.observe(element);
  }
}
