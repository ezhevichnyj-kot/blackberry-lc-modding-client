import { Component } from "@angular/core";
import { ThemeButtonComponent } from "@/components";

@Component({
    selector: 'header-component',
    templateUrl: './component.html',
    styleUrl: './component.css',
    imports: [ThemeButtonComponent],
})
export class HeaderComponent {};