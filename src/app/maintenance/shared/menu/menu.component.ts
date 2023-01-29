import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  items!: MenuItem[];
  ngOnInit() {
    this.items = [
      {
        label: 'Mantenimientos',
        icon: 'fa fa-cogs',
        items: [
          { label: 'Perfiles', icon: 'fa fa-cubes' }
        ]
      }
    ];
  }
}
