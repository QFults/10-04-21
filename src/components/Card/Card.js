const styles = {
  card: {
    width: '18rem'
  },
  heading: {
    color: 'red'
  }
}

const Card = ({ name, bio }) => {
  return (
    <div className="card" style={styles.card}>
      <div className="card-body">
        <h5 className="card-title" style={styles.heading}>{name}</h5>
        <p className="card-text">{bio}</p>
      </div>
    </div>
  )
}

export default Card
