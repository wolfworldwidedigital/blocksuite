import type { SurfaceElement } from '../index.js';
import { BrushElement } from './brush/brush-element.js';
import { BrushElementDefaultProps } from './brush/constants.js';
import type { IBrush } from './brush/types.js';
import { ConnectorElement } from './connector/connector-element.js';
import { ConnectorElementDefaultProps } from './connector/constants.js';
import type { IConnector } from './connector/types.js';
import {
  DebugElement,
  DebugElementDefaultProps,
  type IDebug,
} from './debug/debug-element.js';
import { ShapeElementDefaultProps } from './shape/constants.js';
import { ShapeElement } from './shape/shape-element.js';
import type { IShape } from './shape/types.js';

export type { SurfaceElement } from './base-element.js';
export { BrushElement } from './brush/brush-element.js';
export { ConnectorElement } from './connector/connector-element.js';
export { DebugElement } from './debug/debug-element.js';
export { ShapeElement } from './shape/shape-element.js';
export type { ShapeType } from './shape/types.js';

export type PhasorElement =
  | ShapeElement
  | DebugElement
  | BrushElement
  | ConnectorElement
  | SurfaceElement;

export type PhasorElementType = {
  shape: ShapeElement;
  debug: DebugElement;
  brush: BrushElement;
  connector: ConnectorElement;
};

export type IPhasorElement = IShape | IConnector | IDebug | IBrush;

export type IPhasorElementType = {
  shape: IShape;
  debug: IDebug;
  brush: IBrush;
  connector: IConnector;
};

export const ElementCtors = {
  debug: DebugElement,
  brush: BrushElement,
  shape: ShapeElement,
  connector: ConnectorElement,
} as const;

export const ElementDefaultProps = {
  debug: DebugElementDefaultProps,
  brush: BrushElementDefaultProps,
  shape: ShapeElementDefaultProps,
  connector: ConnectorElementDefaultProps,
} as const;
