export default function Rating({ value = 0 }) {
  const stars = [1,2,3,4,5];
  return (
    <div className="rating">
      {stars.map(n => (
        <span key={n} data-testid={'etoile'+n} className={n <= value ? "rating_star rating_star--on" : "rating_star"}>★</span>
      ))}
    </div>
  );
}
