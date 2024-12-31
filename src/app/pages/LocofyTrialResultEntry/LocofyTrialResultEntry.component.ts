import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { TitleBar } from "../../components/TitleBar/TitleBar.component";
import { Content } from "../../components/Content/Content.component";
import { PatientDetails } from "../../components/PatientDetails/PatientDetails.component";
import { Tabs } from "../../components/Tabs/Tabs.component";
import { Trial } from "../../components/Trial/Trial.component";
import { InvestigationItem } from "../../components/InvestigationItem/InvestigationItem.component";
import { Footer } from "../../components/Footer/Footer.component";
@Component({
  selector: "locofy-trial-result-entry",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    TitleBar,
    Content,
    PatientDetails,
    Tabs,
    Trial,
    InvestigationItem,
    Footer,
  ],
  templateUrl: "./LocofyTrialResultEntry.component.html",
  styleUrls: ["./LocofyTrialResultEntry.component.css"],
})
export class LocofyTrialResultEntry {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
