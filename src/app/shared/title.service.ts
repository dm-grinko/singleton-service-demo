import { Injectable } from '@angular/core';
import { AutoUnsubscribe } from 'take-while-alive';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
@AutoUnsubscribe()
export class TitleService {

    // private sectionTitle = new Subject<string>();
    private sectionTitle = new BehaviorSubject(null);
    public sectionTitle$ = this.sectionTitle.asObservable();


    public title: string;

    setData(title) {
        this.title = title;
        this.sectionTitle.next(title);
    }

    getData() {
        return this.title;
    }
}