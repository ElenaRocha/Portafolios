import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/post.model';
import { Cathegory } from '../models/cathegory.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-vista-post',
  templateUrl: './vista-post.component.html',
  styleUrls: ['./vista-post.component.css'],
})
export class VistaPostComponent implements OnInit {
  post: Post;
  constructor(
    private postsService: PostsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.post = this.postsService.getPostById(Number(params.postId));
    });
  }
}
