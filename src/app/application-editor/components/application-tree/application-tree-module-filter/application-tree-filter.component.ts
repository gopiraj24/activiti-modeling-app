 /*!
 * @license
 * Copyright 2018 Alfresco, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ArtifactTypeFilter } from '../application-tree.helper';
import { ARTIFACT_TYPE } from 'ama-sdk';

@Component({
    selector: 'ama-application-tree-filter',
    templateUrl: './application-tree-filter.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApplicationTreeFilterComponent implements OnInit {
    @Input() applicationId: string;
    @Input() filter: ArtifactTypeFilter;
    @Input() contents: any[];
    @Input() loading: boolean;
    @Input() expanded: boolean;
    @Output() opened = new EventEmitter<{ applicationId: string; type: string, loadData: boolean }>();
    @Output() closed = new EventEmitter<{ type: string }>();

    ignoreOpenEmit = false;

    ngOnInit() {
        if (this.expanded) {
            this.ignoreOpenEmit = true;
        }
    }

    contentHasBeenLoaded() {
        return !this.loading;
    }

    contentsAreEmpty() {
        return !(this.contents && this.contents.length);
    }

    filterClosed(type: ARTIFACT_TYPE): void {
        this.closed.emit({ type });
    }

    filterOpened(type: ARTIFACT_TYPE): void {
        this.opened.emit({ applicationId: this.applicationId, type, loadData: !this.ignoreOpenEmit });
        if (!this.ignoreOpenEmit) {
            this.ignoreOpenEmit = false;
        }
    }
}
