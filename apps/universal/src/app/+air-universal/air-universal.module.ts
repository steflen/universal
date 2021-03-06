import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@fulls1z3/shared/ui-material';

import { SharedModule } from '../shared';
import { CardModule } from '../shared/card';
import { CommonModule } from '../shared/common/common.module';
import { DataTableModule } from '../shared/data-table';
import { FalsyModule } from '../shared/falsy';

import { routes } from './air-universal.routes';
import { AirlineDetailContainerComponent } from './airline/airline-detail/airline-detail-container.component';
import { AirlineDetailComponent } from './airline/airline-detail/airline-detail.component';
import { AirlineComponent } from './airline/airline.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MaterialModule,
    SharedModule,
    CardModule,
    DataTableModule,
    FalsyModule,
    CommonModule
  ],
  declarations: [AirlineDetailContainerComponent, AirlineDetailComponent, AirlineComponent]
})
export class AirUniversalModule {}
