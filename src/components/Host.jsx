export default function Host({ name, image }) {
  return (
    <div className="host">
      <p className="host_name">{name}</p>
      <img className="host_img" src={image} alt={name} />
    </div>
  );
}
