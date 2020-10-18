import { Component, Input } from '@angular/core';
import { Item } from '../models/item';

@Component({
  selector: 'recursive-table',
  templateUrl: './recursive-table.component.html',
  styleUrls: ['./recursive-table.component.scss']
})
export class RecursiveTableComponent {

  @Input() items: Item[] = [];
}
