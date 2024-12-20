import type { Meta, StoryFn } from "@storybook/react"
import { CheckIcon } from "@yamada-ui/lucide"
import { Button, VisuallyHidden } from "@yamada-ui/react"

type Story = StoryFn<typeof VisuallyHidden>

const meta: Meta<typeof VisuallyHidden> = {
  component: VisuallyHidden,
  title: "Components / Other / VisuallyHidden",
}

export default meta

export const basic: Story = () => {
  return (
    <Button>
      <VisuallyHidden>Checkmark</VisuallyHidden>
      <CheckIcon fontSize="2xl" />
    </Button>
  )
}
