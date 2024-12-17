import { Component, OnInit } from '@angular/core';
import { ListComponent } from '../components/list/list.component';
import { AddDbzChararterComponent } from '../components/add-chararter/add-dbz-chararter.component';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  imports: [ListComponent, AddDbzChararterComponent],
})
export class MainPageComponent {}
