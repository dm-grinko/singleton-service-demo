import { Component, OnInit } from '@angular/core';
import { TitleService } from './shared/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private titleService: TitleService) {}
  
  ngOnInit() {
    this.titleService.setData('singleton-service-app');
  }

}
