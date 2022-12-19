import { Directive, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appLifecycle]',
})
export class LifecycleDirective implements OnInit, OnDestroy, OnChanges {
  constructor() {}

  ngOnInit(): void {
    this.lifeCycle('OnInit');
  }
  ngOnDestroy(): void {
    this.lifeCycle('OnDestroy');
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.lifeCycle('OnChanges');
    console.log(changes);
    
  }

  lifeCycle(hook: string) {
    console.log(`ciclo de vida: ${hook}`);
  }
}
