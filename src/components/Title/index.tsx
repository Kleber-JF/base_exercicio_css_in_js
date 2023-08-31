import { EstiloH2, EstiloH3 } from './styles'

export type Props = {
  children: string
}

const TitleH2 = ({ children }: Props) => <EstiloH2>{children}</EstiloH2>

export const TitleH3 = ({ children }: Props) => <EstiloH3>{children}</EstiloH3>

export default TitleH2
