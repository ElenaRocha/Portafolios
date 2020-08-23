import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { Cathegory } from '../models/cathegory.model';
import { PostsService } from '../services/posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  arrPosts: Post[];

  constructor(
    private postsService: PostsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.arrPosts = this.postsService.getAllPosts();
  }

  ngOnInit(): void {
    let cathegory = '';

    this.activatedRoute.params.subscribe((params) => {
      cathegory = params.cathegory;

      if (cathegory !== undefined) {
        this.arrPosts = this.postsService.getPostsByCathegory(cathegory);
      } else {
        this.arrPosts = JSON.parse(localStorage.getItem('posts'));
      }
    });
  }
}
