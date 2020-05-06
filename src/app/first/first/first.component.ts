import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/title.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    // const data = this.titleService.getData();
    // console.log('FirstComponent', data);

    this.titleService.sectionTitle$.subscribe(data => {
      console.log('FirstComponent', data);
    });
  }

}
