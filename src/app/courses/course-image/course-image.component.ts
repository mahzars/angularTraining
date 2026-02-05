import { Component, Input } from '@angular/core';

@Component({
    selector: 'course-image',
    templateUrl: './course-image.component.html',
    styleUrls: ['./course-image.component.css'],
    standalone: true
})
export class CourseImageComponent {
    @Input('src')
    imageUrl: string;
}
