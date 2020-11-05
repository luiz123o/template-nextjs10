const Main = ({
  title = 'React Avançado',
  description = 'olá vc está em um template'
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <span>{description}</span>
    </div>
  )
}
export default Main
