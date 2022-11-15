import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  photo: String = "https://8nuwa2vbpd427a7jp9r7di13-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/checklist.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
