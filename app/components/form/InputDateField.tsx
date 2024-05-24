'use client'
import { Controller, FieldError, UseControllerProps } from 'react-hook-form'
import DatePicker, { ReactDatePickerProps } from 'react-datepicker'
import React from 'react'
import clsx from 'clsx'

import { Calendar } from 'iconsax-react'
import { Label } from '../elements/Label'

// import dayjs from 'dayjs'

type ReactDatePickPropsWithoutOnChange = Omit<ReactDatePickerProps, 'onChange'>

type InputDateFieldProps = {
  name: string
  label?: string
  className?: string
  placeholder?: string
  hasError: FieldError | undefined
  value?: string
  isRequired?: boolean
} & ReactDatePickPropsWithoutOnChange &
  UseControllerProps

export const InputDateField: React.FC<InputDateFieldProps> = ({
  name,
  label,
  hasError,
  className,
  placeholder = 'Select date',
  dateFormat = 'MMMM d, yyyy',
  isRequired,
  control,
  ...props
}) => {
  return (
    <>
      {!!label && (
        <Label htmlFor={name} isRequired={isRequired}>
          {label}
        </Label>
      )}
      <Controller
        control={control}
        name={name}
        rules={{ required: isRequired }}
        render={({ field }) => (
          <DatePicker
            className={clsx(
              'h-10 w-full shadow-sm rounded-[4px] border border-[#d0d3d4] bg-white pl-8 outline-none placeholder:text-sm text-sm placeholder:text-gray-300 focus-within:border-primary-200 transition-colors duration-300 disabled:bg-gray-100',
              hasError && 'border-red-500',
              className
            )}
            // formatWeekDay={(day) => dayjs(day).format('ddd')}
            placeholderText={placeholder}
            // closeOnScroll={true}
            showIcon
            onFocus={(e) => e.target.blur()}
            selected={field.value}
            dateFormat={dateFormat}
            name={name}
            onChange={(date) => field.onChange(date)}
            showMonthDropdown
            autoComplete="off"
            showYearDropdown
            dropdownMode="select"
            icon={
              <div className='absolute inset-y-0 flex items-center p-1'>
                <div className='pr-4'>
                  <Calendar
                    size="24"
                    color="#000000"
                    variant="Bulk"
                  />
                </div>
              </div>
            }
            ref={(elem) => {
              elem &&
                field.ref(
                  (elem as unknown as { input: HTMLInputElement }).input
                )
            }}
            {...props}

          />
        )}
      />
    </>
  )
}
