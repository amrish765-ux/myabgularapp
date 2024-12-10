import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,RouterLink,FormsModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  router=inject(Router)
  searchQuery: string = '';
logoff() {
  localStorage.removeItem('loginkey')
  this.router.navigateByUrl('login')
}
onSearch(value: string) {
  console.log('Search initiated with query:', value);
  // Implement your search functionality here
}

}
