import Navbar from './navbar/page';
import Footer from './footer/page';
import Card from './card/page';

export default function Home() {
  return (
    <div>
      <Navbar /> <br></br><br></br><br></br>
      <div className="content">
      <h1>Hey Everyone</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore assumenda iusto facere pariatur voluptas dolore 
        deleniti atque molestias mollitia dignissimos, esse vel commodi, repellendus, aut officiis incidunt sit? Nihil, sed! 
        Reiciendis incidunt odio, repellat facilis autem ex sit ratione eos delectus natus, quidem ipsum possimus laborum! 
        Nesciunt laborum veritatis iure qui illum dolor sequi tenetur.
      </p>
    </div>
      <Card />
      <Footer />
    </div>
  );
}
