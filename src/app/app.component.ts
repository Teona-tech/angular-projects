import {
  Component,
  OnInit
} from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  breadcrumbList = [];

  constructor(
    private routerService: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.listenRouting();
  }

  listenRouting() {
    this.routerService.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    )
      .subscribe(() => {
        this.breadcrumbList = [];

        const paths = this.routerService.url.split('/').slice(1);

        for (const path of paths) {
          const router = this.routerService.config.find((item) => {
            return item.path.includes(path);
          });

          if (router) {
            this.breadcrumbList.push(router);
          } else {
            this.breadcrumbList.push(this.activatedRoute.firstChild.snapshot);
          }
        }
      })
  }
}
