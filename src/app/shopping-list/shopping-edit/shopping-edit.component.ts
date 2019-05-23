import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredient = new EventEmitter<{ name: string; amount: number }>();

  constructor() {}

  ngOnInit() {}

  onAddItem(name: string, amount: number) {
    this.ingredient.emit({ name, amount });
  }
}
