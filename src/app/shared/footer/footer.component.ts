import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentUrl: string="";
  
  currentPage: string = '';

  constructor(private route: ActivatedRoute,private router: Router) {
    this.router.events.subscribe(() => {
      this.currentPage = this.router.url;
    });
  }

  activepage(page: string) {
    this.router.navigate([page]);
  }
  isActive(page: string): boolean {
    return this.currentPage === page;
  }
}
