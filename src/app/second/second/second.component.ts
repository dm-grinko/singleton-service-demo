import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/title.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    const data = this.titleService.getData();
    console.log('SecondComponent', data);
  }

}
