import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule, GridModule, NavModule, UtilitiesModule, TabsModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

import { ColorsComponent, ThemeColorComponent } from './colors.component';
import { CompteComponent } from './compte.component';

// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule,
    CardModule,
    GridModule,
    UtilitiesModule,
    IconModule,
    NavModule,
    TabsModule
  ],
  declarations: [
    ColorsComponent,
    ThemeColorComponent,
    CompteComponent,
  ]
})
export class ThemeModule {
}
