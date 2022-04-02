import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.css']
})
export class EditButtonComponent implements OnInit {

  constructor() { }
  revertModeFlag = false;
  revertMode() {
      if (!this.revertModeFlag) {
          this.revertModeFlag = true;
          var hold = document.getElementById('revert');
          hold.innerHTML = 'Edit Mode';
          var hold2 = Array.from(document.getElementsByClassName('list__newcard') as HTMLCollectionOf<HTMLElement>);
          for (let i = 0; i < hold2.length; i++) {
              hold2[i].style.display = 'none';
          }
          hold2 = Array.from(document.getElementsByClassName('card') as HTMLCollectionOf<HTMLElement>);
          for (let i = 0; i < hold2.length; i++) {
              if (hold2[i].style.display === 'none') {
                  hold2[i].style.display = 'block';
              }
              else if (hold2[i].style.display === 'block') {
                  hold2[i].style.display = 'none';
              }
          }
      }
      else {
          this.revertModeFlag = false;
          var hold = document.getElementById('revert');
          hold.innerHTML = 'Revert Delete';
          var hold2 = Array.from(document.getElementsByClassName('list__newcard') as HTMLCollectionOf<HTMLElement>);
          for (let i = 0; i < hold2.length; i++) {
              hold2[i].style.display = 'inline';
          }
          hold2 = Array.from(document.getElementsByClassName('card') as HTMLCollectionOf<HTMLElement>);
          for (let i = 0; i < hold2.length; i++) {
              if (hold2[i].style.display === 'block') {
                  hold2[i].style.display = 'none';
              }
              else if (hold2[i].style.display === 'none') {
                  hold2[i].style.display = 'block';
              }
          }
      }
  }
  ngOnInit() {
  }
}
