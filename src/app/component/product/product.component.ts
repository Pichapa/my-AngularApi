import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  public results: any; // กำหนดตัวแปร เพื่อรับค่า

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('/assets/data/data2.json').subscribe((data) => {
      // อ่านค่า result จาก JSON response ที่ส่งออกมา
      this.results = data;
    });
  }
}
