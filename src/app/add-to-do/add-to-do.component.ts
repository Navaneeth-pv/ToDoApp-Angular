import { Component } from '@angular/core';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent {
  userId=""
  id=""
  title=""
  completed=""

  readValues=()=>
  {
    let data:any={"userId":this.userId,
    "id":this.id,
    "title": this.title,
    "completed":this.completed}

    console.log(data)
  }


}
