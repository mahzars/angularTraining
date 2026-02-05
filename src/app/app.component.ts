import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COURSES } from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './courses/course-card/course-card.component';
import { CourseImageComponent } from './courses/course-image/course-image.component';
import { CoursesService } from './courses/courses.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [CommonModule, CourseCardComponent, CourseImageComponent]
})
export class AppComponent implements OnInit, AfterViewInit {

    courses: Course[] = COURSES;

    @ViewChildren(CourseCardComponent, { read: ElementRef })
    cards: QueryList<CourseCardComponent>;

    constructor(private coursesService: CoursesService) { }

    ngOnInit() {
        this.coursesService.loadCourses().subscribe({
            next: courses => (this.courses = courses)
        });
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

    onCoursesEdited() {
        console.log("onCoursesEdited");
        this.courses.push(
            {
                id: 11,
                description: "Angular Core Deep Dive",
                iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
                longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
                category: 'INTERMEDIATE',
                lessonsCount: 10
            }
        );
    }
}
