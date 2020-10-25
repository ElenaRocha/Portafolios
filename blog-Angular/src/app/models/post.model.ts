export class Post {
  id: number;
  title: string;
  text: string;
  author: string;
  image: string;
  date: string;
  cathegory: string;

  constructor(pId, pTitle, pText, pAuthor, pImage, pDate, pCathegory) {
    this.id = pId;
    this.title = pTitle;
    this.text = pText;
    this.author = pAuthor;
    this.image = pImage;
    this.date = pDate;
    this.cathegory = pCathegory;
  }
}
