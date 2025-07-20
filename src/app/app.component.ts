import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  posts = [
    {
      title: 'Camping',
      imageUrl: '/assets/images/camping.jpg',
      username: 'cbdag',
      content: 'Kampa gençler'
    },
    {
      title: 'Tırmanış',
      imageUrl: 'assets/images/paragliding.jpg',
      username: 'cbuludag',
      content: 'Bugünde iyi tırmandım'
    },
    {
      title: 'Surf',
      imageUrl: 'assets/images/surf.jpg',
      username: 'cbdoga',
      content: 'Hadi biraz surf yapalım'
    }
  ];
}
