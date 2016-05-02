/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

import {IModelDecoration, IRange, IEditorRange, IPosition} from 'vs/editor/common/editorCommon';
import {ViewLinesViewportData} from 'vs/editor/common/viewLayout/viewLinesViewportData';

export interface IRestrictedRenderingContext {
	linesViewportData:ViewLinesViewportData;

	scrollWidth:number;
	scrollHeight:number;

	visibleRange:IEditorRange;
	bigNumbersDelta:number;

	viewportTop:number;
	viewportWidth:number;
	viewportHeight:number;
	viewportLeft:number;

	getScrolledTopFromAbsoluteTop(absoluteTop:number): number;
	getViewportVerticalOffsetForLineNumber(lineNumber:number): number;
	lineIsVisible(lineNumber:number): boolean;

	getDecorationsInViewport(): IModelDecoration[];
}

export interface IRenderingContext extends IRestrictedRenderingContext {

	linesVisibleRangesForRange(range:IRange, includeNewLines:boolean): LineVisibleRanges[];

	visibleRangeForPosition(position:IPosition): VisibleRange;
}

export class LineVisibleRanges {
	_lineVisibleRangesTrait: void;

	public lineNumber: number;
	public ranges: HorizontalRange[];

	constructor(lineNumber:number, ranges:HorizontalRange[]) {
		this.lineNumber = lineNumber;
		this.ranges = ranges;
	}
}

export class VisibleRange {
	_visibleRangeTrait: void;

	public top:number;
	public left:number;
	public width:number;

	constructor(top:number, left:number, width:number) {
		this.top = top|0;
		this.left = left|0;
		this.width = width|0;
	}
}

export class HorizontalRange {
	_horizontalRangeTrait: void;

	public left: number;
	public width: number;

	constructor(left:number, width:number) {
		this.left = left|0;
		this.width = width|0;
	}
}
