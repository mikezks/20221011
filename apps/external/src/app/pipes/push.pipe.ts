/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import {ChangeDetectorRef, EventEmitter, OnDestroy, Pipe, PipeTransform} from '@angular/core';
import {Observable, SubscriptionLike} from 'rxjs';

/**
 * @ngModule CommonModule
 * @whatItDoes Unwraps a value from an Observable and runs local Change Detection.
 * @howToUse `observable$ | push`
 * @description
 * The `push` pipe subscribes to an `Observable` and returns the latest value it has
 * emitted. When a new value is emitted, the `push` pipe runs local Change Detection on the
 * component.
 * When the component gets destroyed, the `push` pipe unsubscribes automatically to avoid
 * potential memory leaks.
 *
 * @experimental
 *
 * Credits to Fabian Wiles
 * https://raw.githubusercontent.com/Toxicable/angular/798ce0b5288c7a8b522d1ca710a4f64e427e931c/packages/common/src/pipes/push_pipe.ts
 */
@Pipe({name: 'push', pure: false})
export class PushPipe implements OnDestroy, PipeTransform {
  private _latestValue: any = null;

  private _subscription: SubscriptionLike|null = null;
  private _obj: Observable<any>|EventEmitter<any>|null = null;

  constructor(private _ref: ChangeDetectorRef) {}

  ngOnDestroy(): void {
    if (this._subscription) {
      this._dispose();
    }
  }

  transform<T>(obj: null): null;
  transform<T>(obj: undefined): undefined;
  transform<T>(obj: Observable<T>|null|undefined): T|null;
  transform(obj: Observable<any>|null|undefined): any {
    if (!this._obj) {
      if (obj) {
        this._obj = obj;
        this._subscription =
            obj.subscribe({next: (value: Object) => this._updateLatestValue(obj, value)});
      }
      return this._latestValue;
    }

    if (obj !== this._obj) {
      this._dispose();
      return this.transform(obj as any);
    }

    return this._latestValue;
  }

  private _dispose(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
    this._latestValue = null;
    this._subscription = null;
    this._obj = null;
  }

  private _updateLatestValue(async: any, value: Object): void {
    console.log({async, value});
    if (async === this._obj) {
      this._latestValue = value;
      this._ref.detectChanges();
    }
  }
}
