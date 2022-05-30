import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  characters = [];
  latitud;
  longitud;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('http://api.ipstack.com/check?access_key=0250dde4e8dbbbe691b3376e6558e3c1').subscribe(res => {
      this.latitud = res.latitude;
      this.longitud = res.longitude;
      console.log(res.latitude);
      console.log(res.longitude);
    });
  }

}
