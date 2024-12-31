import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { TapsButten } from "../TapsButten/TapsButten.component";
@Component({
  selector: "tabs",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [TapsButten],
  templateUrl: "./Tabs.component.html",
  styleUrls: ["./Tabs.component.css"],
})
export class Tabs {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
