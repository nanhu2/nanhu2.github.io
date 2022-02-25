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

  delete() {
    this.DisplayMe = false;
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
