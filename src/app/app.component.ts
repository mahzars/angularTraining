import { Component, ElementRef, ViewChild } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
    courses = COURSES;

    @ViewChild('cardRef1', {read: ElementRef})
    card1: ElementRef;

    @ViewChild('container')
    conatinerDiv: ElementRef;

    onCourseSelected(course:Course){
        console.log("continerDiv",this.card1);
    }
}
