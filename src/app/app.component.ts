import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements AfterViewInit {

    courses = COURSES;

    @ViewChildren(CourseCardComponent, {read: ElementRef})
    cards: QueryList<CourseCardComponent>;

    constructor() {

    }

    ngAfterViewInit() {
        console.log(this.cards);
        this.cards.changes.subscribe(
            cards => console.log(cards)
        );
    }

    onCourseSelected(course: Course) {
        console.log("continerDiv", course);
    }

    onCoursesEdited(){
        console.log("onCoursesEdited")
        this.courses.push(
            {
                id: 11,
                description: "Angular Core Deep Dive",
                iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
                longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
                category: 'INTERMEDIATE',
                lessonsCount: 10
            }
        )
    }
}
