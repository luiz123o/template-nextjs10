import * as S from '../../styles/components/Main/styles'

const Main = ({
  title = 'Typescript Template for NextJS',
  description = 'Template created for use in projects with React in typescript'
}) => {
  return (
    <S.Wrapper>
      <h1>{title}</h1>
      <span>{description}</span>
    </S.Wrapper>
  )
}
export default Main
