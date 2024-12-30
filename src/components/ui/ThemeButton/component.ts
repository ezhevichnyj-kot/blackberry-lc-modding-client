import { Component, ViewEncapsulation  } from "@angular/core";
import { GlowEffectComponent } from "@/components";

@Component ({
    imports: [GlowEffectComponent],
    selector: 'theme-button',
    templateUrl: './component.html',
    styleUrl: './component.css',
    encapsulation: ViewEncapsulation.None,
})
export class ThemeButtonComponent {
    currentTheme: 'light' | 'dark' = 'light';

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', this.currentTheme);
    };
};