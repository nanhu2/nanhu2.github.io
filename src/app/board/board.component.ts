import { Component, OnInit } from '@angular/core';
import { CardStore } from '../cardstore';
import { ListSchema } from '../listschema';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  cardStore: CardStore;
  lists: ListSchema[];
  displayAddList = false;
  constructor() { }

  toggleDisplayAddList() {
    this.displayAddList = !this.displayAddList;
  }
  addList(element: ListSchema) {
    this.lists.push(element);
  }
  setMockData(): void {
    this.cardStore = new CardStore();
    let lists: ListSchema[] = [
      {
        name: 'To Do',
        cards: []
      },
      {
        name: 'Doing',
        cards: []
      },
      {
        name: 'Done',
        cards: []
      }
    ]
    this.lists = lists;
  }

  ngOnInit() {
    this.setMockData();
  }
  onEnter(value: string) {
    if(value === ""){
      return;
    }
    const newList: ListSchema =
      {
        name: value,
        cards: []
      }
    this.lists.push(newList);
  }
}

