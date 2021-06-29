import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  public results: any; // กำหนดตัวแปร เพื่อรับค่า

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('/assets/data/data1.json').subscribe((data) => {
      // อ่านค่า result จาก JSON response ที่ส่งออกมา
      this.results = data;
    });
  }
}
