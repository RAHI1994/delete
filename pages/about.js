function About({ posts }) {
  console.log(posts);
  return (
    <>
      <div>This is the place where you have things to place on the ads and put a lot of hard work to put into the things that are well deserved and it will do the secessary work to reach a lot of people and it will help us to do lot of work This is the place where we have to place different ads into the placement and let us check where we can put our targeted audience and place the value of the thimgs that you will get in places that you have to decide and you have place the ads in diffrent places and have to do certian things in a way that you will probably insecure that thing. If you will do the places and you will get the things. This is the main development tool taht we can use to capture the clients and get the value out of it. This is going to be the best and it will help us to get the points in place to get the results you are desiring. This will be the results of the things you have to pay attention to get thr results. if you have the expo cli you have to play the game and be forcefully do the needful to tackel. Now lets create a new app and do the needful and you will get those and be productive and the red box error and the yellow box error shows up and it will help us to build the responses and it will help the brands to get more attention and get the leads and convert those leads into customers This wil help us to get more attention and build our brand. Which people can recognise and buy from us.</div>
      <p className={styles.description}>Get started by editing and do some wonderful things with it. This is the case where you can get lot of computional power and do lot of work and do nothing about it. This is the place where we can put lot of details and do lot of work and do not possibly do a lot with this. This is the thing I can do to achive a lot of work and do lot of work and it will blow your mind. It will help our brand to recognise as a band to achive a lot. This is a place where people can book orders and contact with consumers and put lot of work to do its thing. It can also setup a business profile to get access extra features and grow the business. This can achive set up professional dashboard to get the insights of the profile.</p>
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
