import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,RouterLink,FormsModule,ReactiveFormsModule,MatAutocomplete],
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




searchPlaceholder: string = 'Search by name';

updatePlaceholder(event: Event) {
  // Cast EventTarget to HTMLSelectElement to access the 'value' property
  const selectedValue = (event.target as HTMLSelectElement).value;

  if (selectedValue === 'name') {
    this.searchPlaceholder = 'Search by name';
  } else if (selectedValue === 'email') {
    this.searchPlaceholder = 'Search by email';
  } else if (selectedValue === 'phone') {
    this.searchPlaceholder = 'Search by phone number';
  }
}
}
