import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

export interface PeriodicElement {
  symbol: string;
  current: number;
  percentage: number;
  exchange: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {symbol: 'BTCUSD', current: 7900, exchange: 'BINANCE', percentage: 0.26},
  {symbol: 'LTCUSD', current: 100.93, exchange: 'BINANCE', percentage: 0.20},
  {symbol: 'ETHUSD', current: 250.55, exchange: 'BINANCE',  percentage: 0.08},
];


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = [ 'symbol', 'exchange', 'current', 'percentage'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  
  constructor() { }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
