import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  constructor(public taskService: TaskService) {}

  ngOnInit(): void {}

  applyFilter() {
    this.taskService.applyFilter();
  }
}
