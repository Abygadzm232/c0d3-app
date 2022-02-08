import * as React from 'react'

import { Button } from '../../components/theme/Button'

export default {
  component: Button,
  title: 'Theme/Button'
}

export const Basic: React.FC = () => <Button>Basic Button</Button>

export const ColoredButton: React.FC = () => (
  <>
    <Button color="white">Colored Button</Button>
    <Button color="lightgrey">Colored Button</Button>
    <Button color="darkgrey">Colored Button</Button>
    <Button color="black">Colored Button</Button>
  </>
)

export const MarginedButton: React.FC = () => (
  <Button m="1">Margined Button</Button>
)

export const TypedButton: React.FC = () => (
  <>
    <Button type="primary">Primary Button</Button>
    <Button type="success">Success Button</Button>
    <Button type="danger">Danger Button</Button>
  </>
)

export const BorderButton: React.FC = () => (
  <Button border>Border Button</Button>
)

export const SmallButton: React.FC = () => (
  <Button size="sm">Small Button</Button>
)

export const LargeButton: React.FC = () => (
  <Button size="lg">Large Button</Button>
)

export const BorderlessButton: React.FC = () => (
  <Button>Borderless Button</Button>
)

export const OutlinedButton: React.FC = () => (
  <>
    <Button outline type="primary">
      Outlined Primary Button
    </Button>
    <Button outline type="success">
      Outlined Success Button
    </Button>
    <Button outline type="danger">
      Outlined Danger Button
    </Button>
  </>
)

export const OutlinedWithBorderButton: React.FC = () => (
  <>
    <Button outline border type="primary">
      Outlined Primary Button
    </Button>
    <Button outline border type="success">
      Outlined Success Button
    </Button>
    <Button outline border type="danger">
      Outlined Danger Button
    </Button>
  </>
)
