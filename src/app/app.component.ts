import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    const img = new Image();
    img.src = 'assets/profile-picture.jpg';
    img.style.opacity = '0';

    img.onload = () => {
      const parent = document.getElementById('profile-picture');

      const placeholder = document.getElementById('placeholder');
      placeholder.style.opacity = '0';
      setTimeout(_ => placeholder.remove(), 500);

      parent.appendChild(img);
      setTimeout(_ => (img.style.opacity = '1'), 1);
    };
  }
}
