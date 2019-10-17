import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

export class ProductAlertsComponent implements OnInit {
  @Input() product;
  constructor() { }

  ngOnInit() {
  }

}
