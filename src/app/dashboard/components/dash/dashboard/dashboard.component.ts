import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HttpClientModule],
  providers: [HttpClient, DashboardService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  userDetails: any = {};
  constructor(private dashboardService: DashboardService) {}
  // the initialization of the dashboard component , immediately we are expecting the rest call should be done.?
  ngOnInit(): void {
    //handling the initialization of the dashboard component
    this.dashboardService.getUserDetails().subscribe((res) => {
      this.userDetails = res;
      console.log(this.userDetails);
    });
  }
  // /api/auth : get method : to get user details..
}
