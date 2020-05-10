import { Directive, EventEmitter, HostListener, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Directive({
  selector: '[appThrottleClick]'
})
export class ThrottleClickDirective implements OnInit, OnDestroy {
  @Output() public throttledClick = new EventEmitter();
  
  public throttleTime = 1300;
  private clicks = new Subject();
  private subscription: Subscription;

  constructor() { }

  public ngOnInit() {
    this.subscription = this.clicks.pipe(
      throttleTime(this.throttleTime)
    ).subscribe(e => this.throttledClick.emit(e));
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  @HostListener('click', ['$event'])
  clickEvent(event) {
    event.preventDefault();
    event.stopPropagation();
    this.clicks.next(event);
  }
}
