import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../todo';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  editMode: boolean = false;
  courseId: number = 0;
  course: any;
  RouteParam: any;
  service: any;
  id: any;
  task: any;
  // @ViewChild('task') input!: ElementRef;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private todoService: Todo
  ) {}
  ngOnInit(): void {
    this.RouteParam = this.activatedRoute.paramMap.subscribe((param) => {
      this.courseId = Number(param.get('id'));
      this.task = this.todoService.to_do_list[this.courseId].name;
    });
  }

  // ngAfterViewInit(): void {
  //   this.input.nativeElement.value =
  //     this.todoService.to_do_list[this.courseId].name;
  // }

  editList() {
    this.todoService.to_do_list[this.courseId].name = this.task;
    this.router.navigate(['']);
  }
}
