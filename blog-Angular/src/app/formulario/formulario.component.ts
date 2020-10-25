import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/post.model';
import { Cathegory } from '../models/cathegory.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  formulario: FormGroup;

  constructor(private postsService: PostsService, private router: Router) {
    this.formulario = new FormGroup({
      title: new FormControl('', [Validators.required]),
      text: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      cathegory: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  getData(): void {
    this.postsService.addPost(this.formulario.value);
    this.router.navigate(['/blog']);
  }
}
