import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import ListItens from './components/ListItens';

import Billie from './imgs/billie.jpg';
import Frank from './imgs/francisco-oceano1.jpg'




const artistList = [
  {
    url:"https://open.spotify.com/intl-pt/artist/5K4W6rqBFWDnAN6FQUkS6x?si=GT0lMkA3R8WYns2ydrciAg",
    ImageInt:"",
    alt:"Imagem do artista Ye.",
  }
  ,
  {
     url:"https://open.spotify.com/intl-pt/artist/4V8LLVI7PbaPR0K2TGSxFF?si=lNV9-raoTb6rc_jDUtDYrg", 
     ImageInt:"",
     alt:"Imagem do artista Tyler, the Creator",
  }             
   ,
  {                 
     url:"https://open.spotify.com/intl-pt/artist/2h93pZq0e7k5yf4dywlkpM?si=--pKW_74RCOdz9IWzplSnw", 
     ImageInt:{Frank}, 
     alt:"Imagem do artista Francisco Oceano", 
  }               
    ,                
    {                
      url:"https://open.spotify.com/intl-pt/artist/6qqNVTkY8uBg9cP3Jd7DAH?si=DcU0PLY6TsuWYCDkFfNUqA", 
      ImageInt:{Billie},
      alt:"Imagem da artista Billie Eilish",
  }            
                  
]

const socialList = [
  {
    url: "https://www.instagram.com/die_prado/?hl=pt-br",
    ImageInt: "/assets/instagram.svg",
    alt: "Logo Do Instagram",
  },
  {
    url: "",
    ImageInt: "",
    alt: "Logo do X"
  },
  {
    url: "",
    ImageInt: "",
    alt: "Logo da twitch",
  }
]


function App() {
  return (
    <div className="App">
      {/* Incluir Header aqui!! */}
      <Header/>
      <main>
        <Section
        title="Meus Artistas Preferidos"
        subtitle="Os artistas que mais admiro e escuto."
        >
       
       {
        artistList.map(function(item){
          return(
            <ListItens
            url={item.url}
            ImageInt={item.ImageInt}
            alt={item.alt}
            />
          )
        })
       }

        </Section>

       

       <Section 
        title="Álbuns Preferidos"
        subtitle="Meus álbuns preferidos de todos os tempos. Veja a resenha que fiz sobre cada álbum clicando neles."
        />
        <Section
        title="Minhas Redes Socias"
        subtitle="Se conecte comigo agora mesmo!"
        >
          {
            socialList.map(function(item){
              <ListItens
              url={item.url}
              ImageInt={item.ImageInt}
              alt={item.alt}
              />
            }
            )
          }
        </Section>
  
      </main>
    </div>
  );
}

export default App;
