import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Cathegory } from '../models/cathegory.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  arrPosts: Post[];
  arrCathegories: Cathegory[];
  idActual: number;

  constructor() {
    this.idActual = 7;
    this.arrPosts = [
      new Post(
        1,
        'París',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur ante mattis nibh porta, et maximus turpis pellentesque. Quisque laoreet magna in urna luctus, et sodales felis semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec facilisis dapibus ultrices. Duis iaculis pretium diam, quis vulputate tellus porta vulputate. Etiam eros nibh, tincidunt ac ante in, finibus gravida nisl. Integer eu lorem nec ante consequat fermentum. Vestibulum bibendum urna condimentum metus maximus faucibus./ Ut lacinia, ligula vel cursus viverra, odio nisi porta augue, sed elementum leo sem in arcu. Integer quis varius diam. Proin id hendrerit nulla, a dapibus turpis. Nulla facilisi. Maecenas rutrum lectus sit amet dignissim euismod. Etiam porttitor finibus lacus, sed auctor nulla scelerisque ac. Aliquam erat volutpat. Fusce pellentesque leo in tortor volutpat tempus. Nunc vitae ex luctus, semper leo sit amet, commodo nulla. Donec pulvinar ultrices lorem, et molestie ligula efficitur sed. Mauris pulvinar ullamcorper tortor vel lobortis. Suspendisse eros massa, sollicitudin id posuere id, lacinia non magna. Integer id velit nec sem finibus auctor nec at augue. Vivamus ultrices ultricies enim, non bibendum eros sollicitudin vel. Fusce nec feugiat sapien./ Aenean eget semper metus, a ornare elit. Nulla eget erat nisi. Morbi sagittis in dui a lobortis. Duis sit amet euismod sem, a euismod justo. Etiam non consectetur libero. Phasellus faucibus ex a sapien hendrerit faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus./ Phasellus blandit aliquet ipsum eget tincidunt. Duis imperdiet in leo id sodales. Donec auctor, nisl ut vulputate condimentum, nunc ex auctor sapien, id auctor velit risus quis tortor. Pellentesque urna est, tincidunt a lacus ac, mattis mollis purus. Morbi tempor tortor ac dolor consequat, eget vestibulum elit congue. In hac habitasse platea dictumst. Ut volutpat ipsum ac mi semper, eget ultrices turpis scelerisque. Fusce tempor massa in metus placerat, quis lacinia enim pulvinar. Quisque tincidunt porta laoreet. Fusce ultrices est vitae turpis luctus maximus. Integer sagittis blandit neque vel laoreet. Morbi id venenatis felis. Cras tincidunt viverra magna./ Nam lacinia neque vel aliquet tincidunt. Maecenas efficitur, lorem id euismod ullamcorper, nibh nisi auctor turpis, eget interdum ante felis sed elit. Pellentesque pharetra ullamcorper gravida. Quisque diam eros, pulvinar a commodo ac, molestie nec felis. Etiam nisi lorem, eleifend vitae ex ut, ornare interdum eros. Maecenas rhoncus risus in sem bibendum, at lobortis nulla posuere. Nam ut erat semper, laoreet arcu vitae, aliquam lorem. Nunc eu lacus id erat fringilla ultricies ultrices nec felis.',
        'Elena',
        '../../assets/eiffel-tower.jpg',
        '17-08-20',
        'Guías esenciales'
      ),
      new Post(
        2,
        'Roma al atardecer',
        'Ut lacinia, ligula vel cursus viverra, odio nisi porta augue, sed elementum leo sem in arcu. Integer quis varius diam. Proin id hendrerit nulla, a dapibus turpis. Nulla facilisi. Maecenas rutrum lectus sit amet dignissim euismod. Etiam porttitor finibus lacus, sed auctor nulla scelerisque ac. Aliquam erat volutpat. Fusce pellentesque leo in tortor volutpat tempus. Nunc vitae ex luctus, semper leo sit amet, commodo nulla. Donec pulvinar ultrices lorem, et molestie ligula efficitur sed. Mauris pulvinar ullamcorper tortor vel lobortis. Suspendisse eros massa, sollicitudin id posuere id, lacinia non magna. Integer id velit nec sem finibus auctor nec at augue. Vivamus ultrices ultricies enim, non bibendum eros sollicitudin vel. Fusce nec feugiat sapien./ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur ante mattis nibh porta, et maximus turpis pellentesque. Quisque laoreet magna in urna luctus, et sodales felis semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec facilisis dapibus ultrices. Duis iaculis pretium diam, quis vulputate tellus porta vulputate. Etiam eros nibh, tincidunt ac ante in, finibus gravida nisl. Integer eu lorem nec ante consequat fermentum. Vestibulum bibendum urna condimentum metus maximus faucibus./ Aenean eget semper metus, a ornare elit. Nulla eget erat nisi. Morbi sagittis in dui a lobortis. Duis sit amet euismod sem, a euismod justo. Etiam non consectetur libero. Phasellus faucibus ex a sapien hendrerit faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus./ Phasellus blandit aliquet ipsum eget tincidunt. Duis imperdiet in leo id sodales. Donec auctor, nisl ut vulputate condimentum, nunc ex auctor sapien, id auctor velit risus quis tortor. Pellentesque urna est, tincidunt a lacus ac, mattis mollis purus. Morbi tempor tortor ac dolor consequat, eget vestibulum elit congue. In hac habitasse platea dictumst. Ut volutpat ipsum ac mi semper, eget ultrices turpis scelerisque. Fusce tempor massa in metus placerat, quis lacinia enim pulvinar. Quisque tincidunt porta laoreet. Fusce ultrices est vitae turpis luctus maximus. Integer sagittis blandit neque vel laoreet. Morbi id venenatis felis. Cras tincidunt viverra magna./ Nam lacinia neque vel aliquet tincidunt. Maecenas efficitur, lorem id euismod ullamcorper, nibh nisi auctor turpis, eget interdum ante felis sed elit. Pellentesque pharetra ullamcorper gravida. Quisque diam eros, pulvinar a commodo ac, molestie nec felis. Etiam nisi lorem, eleifend vitae ex ut, ornare interdum eros. Maecenas rhoncus risus in sem bibendum, at lobortis nulla posuere. Nam ut erat semper, laoreet arcu vitae, aliquam lorem. Nunc eu lacus id erat fringilla ultricies ultrices nec felis.',
        'Elena',
        '../../assets/street.jpg',
        '17-08-20',
        'Diarios de viaje'
      ),
      new Post(
        3,
        'En el aeropuerto',
        'Aenean eget semper metus, a ornare elit. Nulla eget erat nisi. Morbi sagittis in dui a lobortis. Duis sit amet euismod sem, a euismod justo. Etiam non consectetur libero. Phasellus faucibus ex a sapien hendrerit faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus./ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur ante mattis nibh porta, et maximus turpis pellentesque. Quisque laoreet magna in urna luctus, et sodales felis semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec facilisis dapibus ultrices. Duis iaculis pretium diam, quis vulputate tellus porta vulputate. Etiam eros nibh, tincidunt ac ante in, finibus gravida nisl. Integer eu lorem nec ante consequat fermentum. Vestibulum bibendum urna condimentum metus maximus faucibus./ Ut lacinia, ligula vel cursus viverra, odio nisi porta augue, sed elementum leo sem in arcu. Integer quis varius diam. Proin id hendrerit nulla, a dapibus turpis. Nulla facilisi. Maecenas rutrum lectus sit amet dignissim euismod. Etiam porttitor finibus lacus, sed auctor nulla scelerisque ac. Aliquam erat volutpat. Fusce pellentesque leo in tortor volutpat tempus. Nunc vitae ex luctus, semper leo sit amet, commodo nulla. Donec pulvinar ultrices lorem, et molestie ligula efficitur sed. Mauris pulvinar ullamcorper tortor vel lobortis. Suspendisse eros massa, sollicitudin id posuere id, lacinia non magna. Integer id velit nec sem finibus auctor nec at augue. Vivamus ultrices ultricies enim, non bibendum eros sollicitudin vel. Fusce nec feugiat sapien./ Phasellus blandit aliquet ipsum eget tincidunt. Duis imperdiet in leo id sodales. Donec auctor, nisl ut vulputate condimentum, nunc ex auctor sapien, id auctor velit risus quis tortor. Pellentesque urna est, tincidunt a lacus ac, mattis mollis purus. Morbi tempor tortor ac dolor consequat, eget vestibulum elit congue. In hac habitasse platea dictumst. Ut volutpat ipsum ac mi semper, eget ultrices turpis scelerisque. Fusce tempor massa in metus placerat, quis lacinia enim pulvinar. Quisque tincidunt porta laoreet. Fusce ultrices est vitae turpis luctus maximus. Integer sagittis blandit neque vel laoreet. Morbi id venenatis felis. Cras tincidunt viverra magna./ Nam lacinia neque vel aliquet tincidunt. Maecenas efficitur, lorem id euismod ullamcorper, nibh nisi auctor turpis, eget interdum ante felis sed elit. Pellentesque pharetra ullamcorper gravida. Quisque diam eros, pulvinar a commodo ac, molestie nec felis. Etiam nisi lorem, eleifend vitae ex ut, ornare interdum eros. Maecenas rhoncus risus in sem bibendum, at lobortis nulla posuere. Nam ut erat semper, laoreet arcu vitae, aliquam lorem. Nunc eu lacus id erat fringilla ultricies ultrices nec felis.',
        'Elena',
        '../../assets/airport.jpg',
        '17-08-20',
        'Consejos y recomendaciones'
      ),
      new Post(
        4,
        'Haciendo la maleta',
        'Phasellus blandit aliquet ipsum eget tincidunt. Duis imperdiet in leo id sodales. Donec auctor, nisl ut vulputate condimentum, nunc ex auctor sapien, id auctor velit risus quis tortor. Pellentesque urna est, tincidunt a lacus ac, mattis mollis purus. Morbi tempor tortor ac dolor consequat, eget vestibulum elit congue. In hac habitasse platea dictumst. Ut volutpat ipsum ac mi semper, eget ultrices turpis scelerisque. Fusce tempor massa in metus placerat, quis lacinia enim pulvinar. Quisque tincidunt porta laoreet. Fusce ultrices est vitae turpis luctus maximus. Integer sagittis blandit neque vel laoreet. Morbi id venenatis felis. Cras tincidunt viverra magna./ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur ante mattis nibh porta, et maximus turpis pellentesque. Quisque laoreet magna in urna luctus, et sodales felis semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec facilisis dapibus ultrices. Duis iaculis pretium diam, quis vulputate tellus porta vulputate. Etiam eros nibh, tincidunt ac ante in, finibus gravida nisl. Integer eu lorem nec ante consequat fermentum. Vestibulum bibendum urna condimentum metus maximus faucibus./ Ut lacinia, ligula vel cursus viverra, odio nisi porta augue, sed elementum leo sem in arcu. Integer quis varius diam. Proin id hendrerit nulla, a dapibus turpis. Nulla facilisi. Maecenas rutrum lectus sit amet dignissim euismod. Etiam porttitor finibus lacus, sed auctor nulla scelerisque ac. Aliquam erat volutpat. Fusce pellentesque leo in tortor volutpat tempus. Nunc vitae ex luctus, semper leo sit amet, commodo nulla. Donec pulvinar ultrices lorem, et molestie ligula efficitur sed. Mauris pulvinar ullamcorper tortor vel lobortis. Suspendisse eros massa, sollicitudin id posuere id, lacinia non magna. Integer id velit nec sem finibus auctor nec at augue. Vivamus ultrices ultricies enim, non bibendum eros sollicitudin vel. Fusce nec feugiat sapien./ Aenean eget semper metus, a ornare elit. Nulla eget erat nisi. Morbi sagittis in dui a lobortis. Duis sit amet euismod sem, a euismod justo. Etiam non consectetur libero. Phasellus faucibus ex a sapien hendrerit faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus./ Nam lacinia neque vel aliquet tincidunt. Maecenas efficitur, lorem id euismod ullamcorper, nibh nisi auctor turpis, eget interdum ante felis sed elit. Pellentesque pharetra ullamcorper gravida. Quisque diam eros, pulvinar a commodo ac, molestie nec felis. Etiam nisi lorem, eleifend vitae ex ut, ornare interdum eros. Maecenas rhoncus risus in sem bibendum, at lobortis nulla posuere. Nam ut erat semper, laoreet arcu vitae, aliquam lorem. Nunc eu lacus id erat fringilla ultricies ultrices nec felis.',
        'Elena',
        '../../assets/business.jpg',
        '17-08-20',
        'Consejos y recomendaciones'
      ),
      new Post(
        5,
        'Irish pubs',
        'Nam lacinia neque vel aliquet tincidunt. Maecenas efficitur, lorem id euismod ullamcorper, nibh nisi auctor turpis, eget interdum ante felis sed elit. Pellentesque pharetra ullamcorper gravida. Quisque diam eros, pulvinar a commodo ac, molestie nec felis. Etiam nisi lorem, eleifend vitae ex ut, ornare interdum eros. Maecenas rhoncus risus in sem bibendum, at lobortis nulla posuere. Nam ut erat semper, laoreet arcu vitae, aliquam lorem. Nunc eu lacus id erat fringilla ultricies ultrices nec felis./ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur ante mattis nibh porta, et maximus turpis pellentesque. Quisque laoreet magna in urna luctus, et sodales felis semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec facilisis dapibus ultrices. Duis iaculis pretium diam, quis vulputate tellus porta vulputate. Etiam eros nibh, tincidunt ac ante in, finibus gravida nisl. Integer eu lorem nec ante consequat fermentum. Vestibulum bibendum urna condimentum metus maximus faucibus./ Ut lacinia, ligula vel cursus viverra, odio nisi porta augue, sed elementum leo sem in arcu. Integer quis varius diam. Proin id hendrerit nulla, a dapibus turpis. Nulla facilisi. Maecenas rutrum lectus sit amet dignissim euismod. Etiam porttitor finibus lacus, sed auctor nulla scelerisque ac. Aliquam erat volutpat. Fusce pellentesque leo in tortor volutpat tempus. Nunc vitae ex luctus, semper leo sit amet, commodo nulla. Donec pulvinar ultrices lorem, et molestie ligula efficitur sed. Mauris pulvinar ullamcorper tortor vel lobortis. Suspendisse eros massa, sollicitudin id posuere id, lacinia non magna. Integer id velit nec sem finibus auctor nec at augue. Vivamus ultrices ultricies enim, non bibendum eros sollicitudin vel. Fusce nec feugiat sapien./ Aenean eget semper metus, a ornare elit. Nulla eget erat nisi. Morbi sagittis in dui a lobortis. Duis sit amet euismod sem, a euismod justo. Etiam non consectetur libero. Phasellus faucibus ex a sapien hendrerit faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus./ Phasellus blandit aliquet ipsum eget tincidunt. Duis imperdiet in leo id sodales. Donec auctor, nisl ut vulputate condimentum, nunc ex auctor sapien, id auctor velit risus quis tortor. Pellentesque urna est, tincidunt a lacus ac, mattis mollis purus. Morbi tempor tortor ac dolor consequat, eget vestibulum elit congue. In hac habitasse platea dictumst. Ut volutpat ipsum ac mi semper, eget ultrices turpis scelerisque. Fusce tempor massa in metus placerat, quis lacinia enim pulvinar. Quisque tincidunt porta laoreet. Fusce ultrices est vitae turpis luctus maximus. Integer sagittis blandit neque vel laoreet. Morbi id venenatis felis. Cras tincidunt viverra magna.',
        'Elena',
        '../../assets/ireland.jpg',
        '17-08-20',
        'Diarios de viaje'
      ),
      new Post(
        6,
        'Londres',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur ante mattis nibh porta, et maximus turpis pellentesque. Quisque laoreet magna in urna luctus, et sodales felis semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec facilisis dapibus ultrices. Duis iaculis pretium diam, quis vulputate tellus porta vulputate. Etiam eros nibh, tincidunt ac ante in, finibus gravida nisl. Integer eu lorem nec ante consequat fermentum. Vestibulum bibendum urna condimentum metus maximus faucibus./ Ut lacinia, ligula vel cursus viverra, odio nisi porta augue, sed elementum leo sem in arcu. Integer quis varius diam. Proin id hendrerit nulla, a dapibus turpis. Nulla facilisi. Maecenas rutrum lectus sit amet dignissim euismod. Etiam porttitor finibus lacus, sed auctor nulla scelerisque ac. Aliquam erat volutpat. Fusce pellentesque leo in tortor volutpat tempus. Nunc vitae ex luctus, semper leo sit amet, commodo nulla. Donec pulvinar ultrices lorem, et molestie ligula efficitur sed. Mauris pulvinar ullamcorper tortor vel lobortis. Suspendisse eros massa, sollicitudin id posuere id, lacinia non magna. Integer id velit nec sem finibus auctor nec at augue. Vivamus ultrices ultricies enim, non bibendum eros sollicitudin vel. Fusce nec feugiat sapien./ Aenean eget semper metus, a ornare elit. Nulla eget erat nisi. Morbi sagittis in dui a lobortis. Duis sit amet euismod sem, a euismod justo. Etiam non consectetur libero. Phasellus faucibus ex a sapien hendrerit faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus./ Phasellus blandit aliquet ipsum eget tincidunt. Duis imperdiet in leo id sodales. Donec auctor, nisl ut vulputate condimentum, nunc ex auctor sapien, id auctor velit risus quis tortor. Pellentesque urna est, tincidunt a lacus ac, mattis mollis purus. Morbi tempor tortor ac dolor consequat, eget vestibulum elit congue. In hac habitasse platea dictumst. Ut volutpat ipsum ac mi semper, eget ultrices turpis scelerisque. Fusce tempor massa in metus placerat, quis lacinia enim pulvinar. Quisque tincidunt porta laoreet. Fusce ultrices est vitae turpis luctus maximus. Integer sagittis blandit neque vel laoreet. Morbi id venenatis felis. Cras tincidunt viverra magna./ Nam lacinia neque vel aliquet tincidunt. Maecenas efficitur, lorem id euismod ullamcorper, nibh nisi auctor turpis, eget interdum ante felis sed elit. Pellentesque pharetra ullamcorper gravida. Quisque diam eros, pulvinar a commodo ac, molestie nec felis. Etiam nisi lorem, eleifend vitae ex ut, ornare interdum eros. Maecenas rhoncus risus in sem bibendum, at lobortis nulla posuere. Nam ut erat semper, laoreet arcu vitae, aliquam lorem. Nunc eu lacus id erat fringilla ultricies ultrices nec felis.',
        'Elena',
        '../../assets/london.jpg',
        '17-08-20',
        'Guías esenciales'
      ),
    ];
    this.arrCathegories = [
      new Cathegory(1, 'Diarios de viaje'),
      new Cathegory(2, 'Guías esenciales'),
      new Cathegory(3, 'Consejos y recomendaciones'),
    ];
  }

  getAllPosts(): Post[] {
    //return this.arrPosts;
    localStorage.setItem('posts', JSON.stringify(this.arrPosts));
  }

  getAllCathegories(): Cathegory[] {
    return this.arrCathegories;
  }

  addPost(pPost): void {
    pPost.id = this.idActual;
    this.arrPosts.push(pPost);
    localStorage.setItem('posts', JSON.stringify(this.arrPosts));
    this.idActual++;
  }

  getPostsByCathegory(pCathegory): Post[] {
    const arrPostCathegory = this.arrPosts.filter(
      (post) => post.cathegory === pCathegory
    );

    return arrPostCathegory;
  }

  getPostById(pId): Post {
    let postSelected: Post;

    for (const post of this.arrPosts) {
      if (post.id === pId) {
        postSelected = post;
        break;
      }
    }

    return postSelected;
  }
}
