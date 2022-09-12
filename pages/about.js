function About({ posts }) {
  console.log(posts);
  return <>
    <div>This is the place where you have things to place on the ads and put a lot of hard work to put into the things
      that are well deserved and it will do the secessary work to reach a lot of people and it will help us to do lot of work
      This is the place where we have to place different ads into the placement and let us check where we can put our targeted
      audience and place the value of the thimgs that you will get in places that you have to decide and you have place the ads
      in diffrent places and have to do certian things in a way that you will probably insecure that thing. If you will do the
      places and you will get the things. This is the main development tool taht we can use to capture the clients and get the
      value out of it. This is going to be the best and it will help us to get the points in place to get the results you are
      desiring. This will be the results of the things you have to pay attention to get thr results. if you have the expo cli
      you have to play the game and be forcefully do the needful to tackel. Now lets create a new app and do the needful and
      you will get those and be productive and the red box error and the yellow box error shows up and it will help us to build
      the responses and it will help the brands to get more attention and get the leads and convert those leads into customers
      This wil help us to get more attention and build our brand. Which people can recognise and buy from us.
    </div>
    <p className={styles.description}>This the place where we can learn things and do the needful and get going to get those attention
      and get into places where you will get those things easily and get the placement right and you will get the things that you will
      dream of. Analitics 4 is an essential tool which we can be most cases it will be the case you will get put all the afford and get
      the value back to the community and do the needful to apply through out the classes and to do the right thing in places of the places
      this will help the results to go to the places that will help us to get some attention and be ready to get some attention and do the
      needful to aquire the results we need to distribute and it will help us to get the results that we want to achive through the things
      that an AR can give you that feeling of the things that you can be useful to get the value of the reality and the spark ar will give
      you a sensetion
    </p>
  </>
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
