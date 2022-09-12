function About({ posts }) {
  console.log(posts);
  return (
    <>
      <p>This is the place where we can build the ads and do the needful to get some attention and get paid for the rent
        and get the disclosed amount to the agency through the places we can earn the amount to get the places to get it
        places to get the righ thing and do the needful iin full strength and do the right thing and get the reward that
        we are promised about. This is how we build a formula to get more customers and get the things a customer want
        it is essentially a tric to get the abondend amount to get the restoration going andd do the needful to save
        and give us the ability to get the value that we want and do the needful and have some places to needful to have
        some to do with the places and do the needful and get some work to do the things and help us to get the places
        and have some useful tips to give the creators to have the valuable things and get the content creators have some
        movie to get to the places and get to the things we have to place to do some awesome things that we can defeate and
        it will be helpful for us and this will be more elegant and do the needful to have the right thing to do and become
        more productive in terms of the places we visit and the ads we run and do the needful. This will boost our post and
        reach to many people so that we can get more engagement and put lot of work and get results what we desired for. This
        way we can be helpful for most of the people and get the results
      </p>
      <div>
        This will be the place where we will get al the details and get all the results and this will be the best possible answer
        and it will help us to get more response and this will help us to gain more helpful content this way we can achive what we
        want to achive and do the needful to get lot of work and it will development
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default About;
