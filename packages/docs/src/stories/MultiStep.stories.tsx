import type { Meta, StoryObj } from '@storybook/react';

import { Box, Text, MultiStep, MultiStepProps } from '@jrss-ignite-ui/react';

export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  args: {
    size: 4,
    currentSep: 1,
  },
  decorators: [
    (Story) => {
      return (
        <Box as='label' css={{ display: 'flex', flexDirection: 'column', gap: '$2', }}>
          {Story()}
        </Box>
      )
    }
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {
  args: {}
}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentSep: 4,
  }
}