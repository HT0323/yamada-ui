import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Car as LucideCarIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CarIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CarIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideCarIcon} {...props} />
))

/**
 * @deprecated Use `CarIcon` instead.
 */
export const Car = CarIcon
