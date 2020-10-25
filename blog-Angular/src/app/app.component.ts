import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cathegory } from './models/cathegory.model';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  arrCathegories: Cathegory[];

  constructor(private router: Router, private postsService: PostsService) {}

  ngOnInit(): void {
    this.arrCathegories = this.postsService.getAllCathegories();
  }

  getCathegory($event): void {
    this.router.navigate(['/blog', $event.target.value]);
  }
}
