import { Component, OnInit } from '@angular/core';
import { UIService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:String = 'Task Tracker';
  showAddTask: boolean ;
  subscription: Subscription;

  constructor(private uiService:UIService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
  }

  ngOnInit(): void {
  }

  addButtonClicked() :void{
    this.uiService.toggleAddTask();
    
  } 

}

