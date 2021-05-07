import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-cruise',
  templateUrl: './view-cruise.component.html',
  styleUrls: ['./view-cruise.component.css']
})
export class ViewCruiseComponent implements OnInit {
  cruiseId: number;
  constructor(private activateRoute: ActivatedRoute) {
    this.cruiseId = this.activateRoute.snapshot.params.id;
}

  ngOnInit(): void {
  }

}
