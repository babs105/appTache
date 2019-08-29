import { Component, OnInit } from '@angular/core';
import { TacheService } from '../../services/tache.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  taches: any[];
  constructor(private tacheService: TacheService) { }

  ngOnInit() {
    this.getTaches();
  }


  getTaches() {
    this.tacheService.getTaches().subscribe((data: { status: string, response: any[] }) => this.taches = data.response);
  }
}
