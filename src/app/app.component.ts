import { Component } from '@angular/core';
import { Item } from './models/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: Item[] = [
    {
      seq: 1,
      id: 'id-1',
      name: 'name-1',
      description: 'description-1',
      children: [
        {
          id: 'id-1-1',
          name: 'name-1-1',
          description: 'description-1-1',
          level: 1,
          children: [
            {
              id: 'id-1-1-1',
              name: 'name-1-1-1',
              description: 'description-1-1-1',
              level: 2
            }
          ]
        }
      ]
    }
  ]
}
