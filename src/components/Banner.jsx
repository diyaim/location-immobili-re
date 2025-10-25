export default function Banner({ imageUrl, title, alt }) {
  return (
    <section className="banner">
      <img className="banner_img" src={imageUrl} alt={alt} />
      <h1 className="banner_title">{title}</h1>
    </section>
  );
}
