function CaseResult({ pageContext }) {
  const { data } = pageContext
  return (
    <div>
      Name: {data.title}
      id: {data.id}
      subtitle: {data.subtitle}
    </div>
  )
}
