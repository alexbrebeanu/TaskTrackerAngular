import { Injectable } from '@angular/core';
import { faLessThanEqual } from '@fortawesome/free-solid-svg-icons';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UIService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask ;
    this.subject.next(this.showAddTask);
  }

  onToggle() : Observable<any>{
      return this.subject.asObservable();
  }
}
