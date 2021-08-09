import React from 'react';
import { createBaseStory, BaseTemplate, baseArgs } from './../base';
import { newDate, format, Picker, WheelPickerSelectEvent } from '../../index'; // in your code: @persian-tools/persian-mobile-datepicker
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// Types
import type { ComponentStory } from '@storybook/react';
import type { Event } from '../../components/WheelPicker/index.types';

const title = 'Date Range/Min and Max Year';

export default createBaseStory(title);

const config = {
  year: {
    caption: {
      text: 'سال',
    },
  },
  month: {
    caption: {
      text: 'ماه',
    },
  },
  day: {
    caption: {
      text: 'روز',
    },
  },
};

const BasePickerTemplate: ComponentStory<typeof Picker & { info: string }> = (
  args,
) => {
  const { info, ...pickerArgs } = args;
  const [selectedDateValue, setSelectedDateValue] = React.useState<string>();
  const [selectedDateEvents, setSelectedDateEvents] = React.useState<
    Array<Event>
  >([]);

  function handleEvent(eventType: string) {
    return (data: WheelPickerSelectEvent) => {
      setSelectedDateValue(format(data.date!, 'd MMMM yyyy'));
      setSelectedDateEvents(data.events);
      action(eventType)(data);
    };
  }

  return (
    <BaseTemplate
      value={selectedDateValue!}
      events={selectedDateEvents!}
      info={info}
    >
      <Picker
        {...pickerArgs}
        onChange={handleEvent('onChange')}
        onSubmit={handleEvent('onSubmit')}
      />
    </BaseTemplate>
  );
};

storiesOf(title, module).add(
  'Min and Max Year',
  (args: any) => <BasePickerTemplate {...args} />,
  {
    component: Picker,
    args: {
      isOpen: true,
      theme: 'auto',
      title: 'انتخاب تاریخ از ۱۳۸۰',
      highlightHolidays: true,
      highlightWeekends: true,
      config,
      initialValue: newDate({ year: 1388, month: 3, day: 20 }),
      startYear: 1380,
      endYear: 1388,
    },
    argTypes: baseArgs,
    badges: [BADGE.STABLE],
  },
);
