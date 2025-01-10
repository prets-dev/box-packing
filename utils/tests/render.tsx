import { render as testingLibraryRender } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { theme } from '../../theme';

export function render(ui: React.ReactNode) {
  try {
    return testingLibraryRender(<>{ui}</>, {
      wrapper: ({ children }: { children: React.ReactNode }) => (
        <MantineProvider theme={theme}>{children}</MantineProvider>
      ),
    });
  } catch (error) {
    console.error(error);
  }
}
