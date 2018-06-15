import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspaceRoutingModule } from './workspace-routing.module';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { MatMenuModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    WorkspaceRoutingModule,
    MatMenuModule,
    SharedModule
  ],
  declarations: [WorkspaceComponent]
})
export class WorkspaceModule { }
