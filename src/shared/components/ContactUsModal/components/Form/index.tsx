'use client';

import { isAxiosError } from 'axios';
import { useForm } from 'react-hook-form';

import backEnd from '@/shared/backEnd';
import { NewInput, Textarea, SecondaryButton, PrimaryButton } from '@/shared/components';

import type { Props, FormValues } from './types';

function Form({ onSubmit, onSubmitFailure, onCancelButtonClick }: Props) {
  const {
    handleSubmit: createSubmitHandler,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const handleSubmit = createSubmitHandler(async (data) => {
    try {
      await backEnd.post('core/contact-us/', data);
      onSubmit();
    } catch (error) {
      onSubmitFailure(isAxiosError(error) ? error.message : 'Unknown error');
    }
  });

  return (
    // "React Hook Form" expects passing submit handler this way
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form className="grid grid-cols-[6.625rem_1fr] gap-x-6 gap-y-10" onSubmit={handleSubmit}>
      <div className="col-span-2 space-y-6">
        <NewInput
          {...register('contact', { required: 'Contact is required' })}
          label="Phone / E-mail / Telegram nickname"
          placeholder="+0 / mail@mail.com / @nickname"
          disabled={isSubmitting}
          error={errors.contact?.message}
        />
        <NewInput
          {...register('name', { required: 'Name is required' })}
          label="Your Name"
          placeholder="Elon Musk"
          disabled={isSubmitting}
          error={errors.name?.message}
        />
        <Textarea
          {...register('message', { required: 'Message is required' })}
          label="Your Message"
          placeholder="Hello!"
          disabled={isSubmitting}
          error={errors.message?.message}
        />
      </div>
      <SecondaryButton
        size="lg"
        textColor="blue"
        shadowColor="whiteBlue"
        disabled={isSubmitting}
        onClick={onCancelButtonClick}
      >
        Cancel
      </SecondaryButton>
      <PrimaryButton size="lg" type="submit" disabled={isSubmitting}>
        Send
      </PrimaryButton>
    </form>
  );
}

export default Form;
