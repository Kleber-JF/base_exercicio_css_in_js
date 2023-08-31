import { FormEvent, useState } from 'react'
import { ButtonProcuraVagas, EstiloFormVagas, InputVagas } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <>
      <EstiloFormVagas onSubmit={aoEnviarForm}>
        <InputVagas
          placeholder="Front-end, fullstack, node, design"
          onChange={(e) => setTermo(e.target.value)}
          type="search"
        />
        <ButtonProcuraVagas type="submit">Pesquisar</ButtonProcuraVagas>
      </EstiloFormVagas>
    </>
  )
}
export default FormVagas
