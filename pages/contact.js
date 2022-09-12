function About({ posts }) {
  console.log(posts);
  return (
    <>
      <p>
        This is the place where we can get the things what we want to be the little things and do some work to help people
        this way we can be more productive and get the value we get to promise and help to dicipline and be helpful as you go
        this way we can help our customers and give them what they want and be more productive and give them more control over
        their ads and choose where they are going to show their ads and this will help our customers and get the helpful content
        out there and this way we can help this will tings up to you this will help us to get into the picture and do the right thing
        to accomplish the right balance between the places and it will help us to get an immense amount of help to reduce the places
        and it will help you to accomplish the balance between the target and it will palces our ads into right places and this will
        give us immense opportunity to get to the place where we can say that it will help us bring to get the things to get ready
        this way we can get what we want and do the needful and it will help us to get what we are designed for and this will give us
        an immense opportunity and it give us an immense opportunity and it will help us to get what we want and this will transform
        our future and this way we can achive what we can get and this will be helpful to get all the things and mention all the possible
        combination and get thorugh it and this will give us the ads that we want to place and this will help us immensly and get our
        customers the flexibility that they deserve and this way we can be more helpful to our clients and get them the results that they
        want and make them profitable and help them grow and this is the place where we can do all the things that we deserve and this place
        we can help them to achive the placement the help them what they want to achive and this will help us to get the palced into the
        terms and this place give us an immense opportunity for exprement and do the needful what they want to do and get what they want to
        achive. This is the new technique and formula to achive what we can do and what we can achive this way we belive we can achive the
        latest achivement and do the needful and do the same thing that we have to place and people can achive some of it.
      </p>

      <div>
        This way we can achive some of the work and do the needful to achive some thing and be placed at the art center and do the needful
        and this is the achivement we can accomplish and places our ads into places where we deserve to be the best sutible for the places
        and achive alot more and this way we can be more productive and do the helpful things we can do. This is the place where we can
        achive to be more productive and do the needful and be a part of the organition and this way we can turn our anger into the happiness
        you can be more productive and do this type of work and this will be more placed and this will be more helpful and this will place our
        product into top places and do the needful and be more productive and do the needful and this way we can achive to be more productive
        and to be placed into our dreams and be helpful to get out of all the things that we desired to be and be more productive and to produce
        more helpful content that people can get and help us to achive what we want to be more productive and give them the immense opportunity
        to visit to the places where we can be more productive and do the needful and achive more and this way we can place our ads into the world
        get through the places where we get more customers and and sell our products and become more profitable and do the needful and achive the
        thing to do and do the needful to achive the customers and do the placement and achive more things with it and be more productive and more
        relentness to achive them and do the things to do more and be more productive and helpful to achive and do the places to do more and get the
        places and get through the audacity and be more helpful to get the things and get the things we deserve to be the best and get the things
        to be placed in the right direction and get into the way we can deserve to be the best and this will be more.
      </div>

      <div>
        This place is know for the places and do the needful to be more productive and get to the point where we get a lot of help and place
        ours ads into the right platform and get infront of the right audience at right time this increase our sales and generate more profit.
        This way we can help the organisaion to achive their goals and become more profitable and do the needful to active the places where we
        actively searching for there we have to place our ads and our ads copy has to be more attractive so that it attracts the customers and
        click the ads copy and generate sales and generate more revenue. This way we put our ads into the right place to attract more customers
        and be more productive and this way we help to achive the target that we are aiming for.
      </div>

      <p>Before placing our ads we have do the media planning and plan a strategy for where we put our content in what proportion
        to what media so that we attract more customers and get priviliged to get the stategy to place our
      </p>
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
