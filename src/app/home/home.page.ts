import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}
  changePage(url: string) {
    this.router.navigateByUrl(url)
    console.log("done")
  }

}
