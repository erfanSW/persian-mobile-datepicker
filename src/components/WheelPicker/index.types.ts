import { CSSProperties } from 'react';

export type EventTypes = 'solar' | 'persian';
export interface Event {
  type: EventTypes;
  title: string;
}
export interface WheelPickerSelectEvent {
  date: Date;
  events: Array<Event>;
  object: PickerDateModel;
}

export interface WheelPickerProps {
  // CSS classnames prefix
  classNamePrefix?: string;
  // Initial picker value
  initialValue?: Date;
  // Current picker value
  value?: WheelPickerSelectEvent;
  // Title
  title?: string;
  /**
   * Gets called when value of the picker changes
   *
   * @param {WheelPickerSelectEvent} selected
   * @return {void}
   */
  onChange?: (selected: WheelPickerSelectEvent) => void;
  // Disabled
  disabled?: boolean;
  // Set config to configure year, month, day, hour, minute and seconds
  config: DateConfig;
  /**
   * Specifies the minimum selectable day by user
   *
   * @default null
   * @type {Date}
   */
  minDate?: Date;
  /**
   * Specifies the maximum selectable day by user
   *
   * @default null
   * @type {Date}
   */
  maxDate?: Date;
  /**
   * The Minimum selectable year
   *
   * @description Picker will calculate the StartYear by this approach: currentYear + startYear
   * @default 30
   * @type {number}
   */
  endYear?: number;
  /**
   * The Maximum selectable year
   *
   * @description Picker will calculate the StartYear by this approach: currentYear + startYear
   * @default 30
   * @type {number}
   */
  startYear?: number;
  /**
   * Determines whether to mark weekend days with red or not. (weekend day is Friday)
   *
   * @default false
   * @type {boolean}
   */
  highlightWeekends?: boolean;
  /**
   * Determines whether to mark holidays in day column.
   *
   * @default false
   * @type {boolean}
   */
  highlightHolidays?: boolean;
  // Add the name of the day of the week
  addDayName?: boolean;
}

export type DateConfigTypes =
  | 'year'
  | 'month'
  | 'day'
  | 'hour'
  | 'minute'
  | 'second';
export type DateConfigFormats =
  | 'YYYY'
  | 'YY'
  | 'MM'
  | 'DD'
  | 'hh'
  | 'mm'
  | 'ss';
export type WeekDayText =
  | 'شنبه'
  | 'یک‌شنبه'
  | 'دو‌شنبه'
  | 'سه‌شنبه'
  | 'چهار‌شنبه'
  | 'پنج‌شنبه'
  | 'جمعه';

export interface PickerColumnCaption {
  text: string;
  style?: CSSProperties;
}
export type PickerSelectedDateValue = number;
export interface DateConfigValuesModel {
  // Columns Caption with text and style
  caption?: PickerColumnCaption;
  // Format the Columns content
  formatter?: (
    value: RequiredPickerExtraDateInfo,
  ) => PickerSelectedDateValue | string;
  // Items className
  classname?: (value: RequiredPickerExtraDateInfo) => string | string[];
  // Allow to render an Item
  shouldRender?: (value: RequiredPickerExtraDateInfo) => boolean;
  // Column Styles
  columnStyle?: CSSProperties;
  // Column's Items Styles
  itemStyle?: CSSProperties;
  // Active Selected Column's Items Styles
  selectedItemStyle?: CSSProperties;
}

export type DateConfig = Partial<
  {
    [key in DateConfigTypes]: DateConfigValuesModel;
  }
>;

export interface PickerDateModel {
  year?: PickerSelectedDateValue;
  month?: PickerSelectedDateValue;
  day?: PickerSelectedDateValue;
  hour?: PickerSelectedDateValue;
  minute?: PickerSelectedDateValue;
  second?: PickerSelectedDateValue;
}
export type RequiredPickerDateModel = Required<PickerDateModel>;

export interface PickerExtraDateInfo extends PickerDateModel {
  // The day of the week of the given date.
  // 0 represents Saturday(شنبه)
  weekDay?: number;
  // The day's name of the week of the given date
  weekDayText?: WeekDayText;
  // The month's name of the given date
  monthText?: string;
  // The day of the year of the given date.
  dayOfYear?: number;
  // Is the given date in the leap year?
  isLeapYear?: boolean;
  // Is the given date holiday?
  isHoliday?: boolean;
}
export type RequiredPickerExtraDateInfo = Required<PickerExtraDateInfo>;

export interface PickerItemModel<V = PickerSelectedDateValue> {
  type: DateConfigTypes;
  value: V;
}

export type PickerColumns = Array<PickerItemModel<Array<PickerItemModel>>>;
