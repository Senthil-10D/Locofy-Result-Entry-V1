import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

@Component({
  selector: "title-bar",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./TitleBar.component.html",
  styleUrls: ["./TitleBar.component.css"],
})
export class TitleBar {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
