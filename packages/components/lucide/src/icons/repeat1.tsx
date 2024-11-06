import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Repeat1 as LucideRepeat1Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Repeat1Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Repeat1Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideRepeat1Icon} {...props} />
))

/**
 * @deprecated Use `Repeat1Icon` instead.
 */
export const Repeat1 = Repeat1Icon
