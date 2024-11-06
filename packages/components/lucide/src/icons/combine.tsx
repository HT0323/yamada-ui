import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Combine as LucideCombineIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CombineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CombineIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideCombineIcon} {...props} />
))

/**
 * @deprecated Use `CombineIcon` instead.
 */
export const Combine = CombineIcon
