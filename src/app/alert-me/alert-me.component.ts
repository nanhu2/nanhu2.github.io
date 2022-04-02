import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-me',
  templateUrl: './alert-me.component.html',
  styleUrls: ['./alert-me.component.css']
})
export class AlertMeComponent implements OnInit {

  constructor() { }
  alerted(){
    alert("This is the help menu. \n First, you can create a new task hitting the create task button and enter in desired " +
        "information \n You can drag and drop this task around to other columns. \n You can create new columns with the create column button" +
        "\n You can edit the contents of a card by hitting the edit button on the card. \n You can delete a card hitting the delete button \n" +
        "Finally, you can revert deletions by hitting the revert delete button and hitting restore on the card you wish to revert.");
  }
  ngOnInit() {
  }

}
