import * as React from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';

import type { SignInDTO } from '@/types/auth';
import { TextInput } from './common/text-input';
import { Button } from '../button';

const schema = yup.object({
  email: yup.string().email().required().label('Email'),
  password: yup.string().required().label('Password'),
});

function SigninForm() {
  const [error, setError] = React.useState<string | null>(null);
  const methods = useForm<SignInDTO>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (formData: SignInDTO) => {
    console.log(formData);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="w-full">
        <fieldset
          disabled={methods.formState.isSubmitting}
          className="flex flex-col gap-y-5"
        >
          <TextInput name="email" label="Email" type="email" />

          <TextInput
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
          />

          <Button isLoading={methods.formState.isSubmitting} className="mt-1">
            Login
          </Button>
          {error ? (
            <p className="text-red-500 mt-3 text-center">{error}</p>
          ) : null}
        </fieldset>
      </form>
    </FormProvider>
  );
}

export { SigninForm };
