import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-to-do',
  templateUrl: './view-all-to-do.component.html',
  styleUrls: ['./view-all-to-do.component.css']
})
export class ViewAllToDoComponent {
  constructor(private api : ApiService) {
    api.fetchToDo().subscribe(
      (Response)=>{
        this.data=Response;
      }
    )
  }

  data:any=[]


}
