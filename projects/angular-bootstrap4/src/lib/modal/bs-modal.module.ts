/*
 * Bootstrap 4 plugin for Angular.
 * Copyright (c) 2016-2021 Rodziu <mateusz.rohde@gmail.com>
 * License: MIT
 */

import {NgModule} from '@angular/core';
import {BsModalDirective} from './bs-modal.directive';
import {CommonModule} from '@angular/common';
import {BsModalBackdropComponent} from './backdrop/bs-modal-backdrop.component';
import {DismissDirective} from './dismiss.directive';
import {BsHelpersModule} from '../helpers/bs-helpers.module';

@NgModule({
    declarations: [
        BsModalBackdropComponent,
        BsModalDirective,
        DismissDirective
    ],
    imports: [
        BsHelpersModule,
        CommonModule
    ],
    exports: [
        BsModalDirective,
        DismissDirective
    ]
})
export class BsModalModule {
}