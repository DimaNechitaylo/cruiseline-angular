import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CruiseService } from '../../service/cruise/cruise.service';
import { CruiseDTO } from '../../dto/cruiseDTO';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cruises$: Array<CruiseDTO> = [];
  filterForm: FormGroup;
  date: string;
  from: number;
  to: number;

  constructor(private cruiseService: CruiseService) {
    this.cruiseService.getAllCruises().subscribe(cruise => {
      this.cruises$ = cruise;
    })
    date: '';
    from: '';
    to: '';
  }

  ngOnInit() {
    this.filterForm = new FormGroup({
      date: new FormControl(''),
      from: new FormControl(''),
      to: new FormControl('')
    });
  }

  filter(){
    this.date = this.filterForm.get('date').value;
    this.from = this.filterForm.get('from').value;
    this.to = this.filterForm.get('to').value;

    this.cruiseService.filterCruises(this.date, this.from, this.to).subscribe(cruise => {
      this.cruises$ = cruise;
    })
  }

}
