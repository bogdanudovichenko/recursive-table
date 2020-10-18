import { Component, Input } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'recursive-table-body',
  templateUrl: './recursive-table-body.component.html',
  styleUrls: ['./recursive-table-body.component.scss']
})
export class RecursiveTableBodyComponent {
  @Input() items: Item[] = [];

  getMargin (item: Item) {
    if(!item.level) {
      return null;
    }

    return item.level * -5;
  }
}
