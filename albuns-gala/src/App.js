import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import ListItens from './components/ListItens';






const artistList = [
  {
    id:0,
    url:"https://open.spotify.com/intl-pt/artist/5K4W6rqBFWDnAN6FQUkS6x?si=GT0lMkA3R8WYns2ydrciAg",
    ImageInt:"https://www.eventim.com.br/obj/media/BR-eventim/galery/222x222/y/ye-2022-profile.jpg",
    alt:"Imagem do artista Ye.",
  }
  ,
  {
    id:2, 
    url:"https://open.spotify.com/intl-pt/artist/4V8LLVI7PbaPR0K2TGSxFF?si=lNV9-raoTb6rc_jDUtDYrg", 
     ImageInt:"/imgs/tyler-cr.jpg",
     alt:"Imagem do artista Tyler, the Creator",
  }             
   ,
  {                 
    id:3,
    url:"https://open.spotify.com/intl-pt/artist/2h93pZq0e7k5yf4dywlkpM?si=--pKW_74RCOdz9IWzplSnw", 
     ImageInt:"https://hips.hearstapps.com/hmg-prod/images/frank-ocean-gettyimages-1147433944.jpg?crop=1xw:1.0xh;center,top&resize=1200:*", 
     alt:"Imagem do artista Francisco Oceano", 
  }               
    ,                
    {                
      id:4,
      url:"https://open.spotify.com/intl-pt/artist/6qqNVTkY8uBg9cP3Jd7DAH?si=DcU0PLY6TsuWYCDkFfNUqA", 
      ImageInt:"https://s2-vogue.glbimg.com/qVvl8SoY8xAW_OxDQ-LFJ8a8C3M=/0x0:2400x3000/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_5dfbcf92c1a84b20a5da5024d398ff2f/internal_photos/bs/2024/C/M/9o8r6lSuqBkO3DtH489w/gettyimages-2066791308.jpg",
      alt:"Imagem da artista Billie Eilish",
  }            
                  
]

const albunsList = [
  {
    id: 0,
    url: "ht",
    ImageInt: "https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg",
    alt: "Capa do álbum 'Blonde', de Frank Ocean",
  },
  {
    id: 1,
    url: "",
    ImageInt: "https://upload.wikimedia.org/wikipedia/pt/e/e9/Tyler_The_Creator_-_Igor.jpg",
    alt: "Capa do álbum 'Igor', de Tyler, the Creator",
  },
  {
    id: 2, 
    url: "",
    ImageInt: "https://m.media-amazon.com/images/I/81WtBMyGKqL._UF1000,1000_QL80_.jpg",
    alt: "Capa do álbum 'Ye', de Kanye West",
  },
  {
    id: 3, 
    url: "",
    ImageInt: "https://upload.wikimedia.org/wikipedia/en/4/4d/The_life_of_pablo_alternate.jpg",
    alt: "Capa do álbum 'The Life of Pablo', de Kanye West",
  },
]


const socialList = [
  {
    id: 0,
    url: "https://www.instagram.com/die_prado/?hl=pt-br",
    ImageInt: "/assets/instagram.svg",
    alt: "Logo Do Instagram",
  },
  {
    id: 1, 
    url: "",
    ImageInt: "/assets/twitch.svg",
    alt: "Logo do X"
  },
  {
    id: 2,
    url: "",
    ImageInt: "/assets/x.svg",
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
        className='albuns'
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

       

       <Section title="Álbuns Preferidos"
        subtitle="Meus álbuns preferidos de todos os tempos. Veja a resenha que fiz sobre cada álbum clicando neles."
        className="albuns"
        > 
        
        {
        albunsList.map(function(item){
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
        title="Minhas Redes Socias"
        subtitle="Se conecte comigo agora mesmo!"
        
        >
          {
            socialList.map(function(item){
              return (
                <ListItens
                url={item.url}
                ImageInt={item.ImageInt}
                alt={item.alt}
                
                />
              )
            }
          )
          }
        </Section>
  
      </main>
    </div>
  );
}

export default App;
