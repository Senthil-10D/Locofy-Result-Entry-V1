import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LocofyTrialResultEntry } from "./pages/LocofyTrialResultEntry/LocofyTrialResultEntry.component";
const routes: Routes = [
  {
    path: "",
    component: LocofyTrialResultEntry,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
