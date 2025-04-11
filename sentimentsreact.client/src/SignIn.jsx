import * as React from 'react';
import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage } from '@toolpad/core/SignInPage';
import { useTheme } from '@mui/material/styles';

const providers = [{ id: 'passkey', name: 'Passkey' },{ id: 'google', name: 'Google' }];

const signIn = async (provider) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      alert(`Signing in with ${provider.id}`);
      resolve();
    }, 500);
  });
  return promise;
};

export default function PasskeySignInPage() {
  const theme = useTheme();
  return (
    <AppProvider theme={theme}>
      <SignInPage
        signIn={signIn}
        providers={providers}
        slotProps={{ emailField: { autoFocus: false }, form: { noValidate: true } }}
      />
    </AppProvider>
  );
}
