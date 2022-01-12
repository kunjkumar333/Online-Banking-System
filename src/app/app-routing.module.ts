import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { LogoutComponent } from './logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PassbookComponent } from './passbook/passbook.component';
import { SendmoneyComponent } from './sendmoney/sendmoney.component';
import { AdminTxnComponent } from './admin-txn/admin-txn.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AuthGuard } from './contactus/auth.guard';
import { AdminDahboardComponent } from './admin-dahboard/admin-dahboard.component';
import { AdminSendComponent } from './admin-send/admin-send.component';
import { AdminWithdrawComponent } from './admin-withdraw/admin-withdraw.component';
import { CheckBalanceComponent } from './check-balance/check-balance.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},

  {path:'dashboard', canActivate:[AuthGuard], component:DashboardComponent},
  {path:'passbook', canActivate:[AuthGuard], component:PassbookComponent},
  {path:'sendmoney', canActivate:[AuthGuard], component:SendmoneyComponent},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'createaccount', component:CreateaccountComponent},
  {path:'logout', component: LogoutComponent},
  {path:'admintxn', component:AdminTxnComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'contactus', component:ContactusComponent},
  {path:'admin-send', component:AdminSendComponent},
  {path:'admin-withdraw', component:AdminWithdrawComponent},
  {path:'admin-dashboard', component:AdminDahboardComponent},
  {path:'checkbalance',canActivate:[AuthGuard], component:CheckBalanceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
