import { Course } from './../model/course';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'course-card',
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {

  @Input({required:true})
  course:Course;

  @Input({required:true})
  cardIndex:number

  @Output()
  courseSelected = new EventEmitter<Course>();

  constructor(){ }

  ngOnInit(){ }

  onCourseViewed(){
    console.log("card component - button clicked....")
    this.courseSelected.emit(this.course);
  }

}
