export async function generateMetadata() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs?slug=henry");
  const data = await res.json();
  return {
    title: data.name,
    description: `loves ${data.favouriteColor}`,
  };
}

export default async function Henry() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs?slug=henry");
  const data = await res.json();
  console.log(data);
  return (
    <main>
      <h1>{data.name}</h1>
      <h2>{data.slug}</h2>
      <p>my faverite color is {data.favouriteColor}</p>
      <img src={data.image.url} alt="henry pic" />
    </main>
  );
}
