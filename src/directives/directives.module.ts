import { NgModule } from '@angular/core';
import { ParallaxDirective } from './parallax/parallax';
import { HideHeaderDirective } from './hide-header/hide-header';
@NgModule({
	declarations: [ParallaxDirective,
    HideHeaderDirective],
	imports: [],
	exports: [ParallaxDirective,
    HideHeaderDirective]
})
export class DirectivesModule {}
