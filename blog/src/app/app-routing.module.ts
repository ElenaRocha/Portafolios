import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { FormularioComponent } from './formulario/formulario.component';
import { VistaPostComponent } from './vista-post/vista-post.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/blog' },
  { path: 'blog', component: BlogComponent },
  { path: 'new', component: FormularioComponent },
  { path: 'blog/:cathegory', component: BlogComponent },
  { path: 'post/:postId', component: VistaPostComponent },
  { path: '**', redirectTo: '/blog' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
