import { Component, Input, OnInit } from "@angular/core";
import { CardSchema } from "../cardschema";
@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  @Input() card: CardSchema;
  DisplayMe = true;
  display = true;
  constructor() {}

  delete(cardId) {
    this.DisplayMe = false;
    console.log(cardId);
    var hold = document.getElementById(cardId);
    hold.style.display = 'none';
    hold = document.getElementById("restore" + cardId);
    hold.style.display = 'block';
    hold = document.getElementById("edit" + cardId);
    hold.style.display = 'none';
    hold = document.getElementById("delete" + cardId);
    hold.style.display = 'none';

  }
  restoreMe(cardId) {
      console.log(cardId);
      var hold = document.getElementById(cardId);
      hold.style.display = 'none';
      hold = document.getElementById("restore" + cardId);
      hold.style.display = 'none';
      hold = document.getElementById("edit" + cardId);
      hold.style.display = 'block';
      hold = document.getElementById("delete" + cardId);
      hold.style.display = 'block';
  }
  displayFalse() {
    this.display = false;
  }
  editCardInput(value) {
    this.card.description = value;
  }
  ngOnInit() {}
  dragStart(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  onEnter(value){
    this.editCardInput(value);
  }
}
