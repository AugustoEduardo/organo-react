import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times,setTimes] = useState([

    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#D9F7E9'
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#E8F8FF'
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#F0F8E2'
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#FDE7E8'
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#FAE9F5'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFF5D9'
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FFEEDF'
    },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: 'EDUARDO AUGUSTO',
      cargo: 'Aluno',
      imagem: 'https://github.com/augustoeduardo.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'EDUARDO AUGUSTO',
      cargo: 'Aluno',
      imagem: 'https://github.com/augustoeduardo.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'EDUARDO AUGUSTO',
      cargo: 'Aluno',
      imagem: 'https://github.com/augustoeduardo.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'EDUARDO AUGUSTO',
      cargo: 'Aluno',
      imagem: 'https://github.com/augustoeduardo.png',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'EDUARDO AUGUSTO',
      cargo: 'Aluno',
      imagem: 'https://github.com/augustoeduardo.png',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'EDUARDO AUGUSTO',
      cargo: 'Aluno',
      imagem: 'https://github.com/augustoeduardo.png',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'EDUARDO AUGUSTO',
      cargo: 'Aluno',
      imagem: 'https://github.com/augustoeduardo.png',
      time: times[6].nome
    },
  ]

  const [colaboradores, setColaboradores] = useState(inicial);

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if (colaborador.id === id) {
        colaborador.favorito = !colaborador.favorito
      }
      return colaborador;
    }))
  }

  function mudarcorDoTime (cor, id){
    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = cor;
      }
      return time;
    }));
  }

  function cadastrarTime (novoTime) {
    setTimes([...times, {...novoTime, id: uuidv4()}])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
      cadastrarTime={cadastrarTime}
      times={times.map (time => time.nome)}
      aoColaboradorCadastrado={colaborador => setColaboradores([...colaboradores, colaborador])}/>

      <section className='times'>
      <h1>Minha Organização</h1>

      {times.map(time => <Time
        aoFavoritar={resolverFavorito}
        mudarCor={mudarcorDoTime}
        key={time.nome}
        id={time.id}
        nome={time.nome}
        cor={time.cor}
        colaboradores={colaboradores.filter (colaborador => colaborador.time === time.nome)}
        aoDeletar={deletarColaborador}
        />)}

      </section>

      <Rodape />

    </div>
  );
}

export default App;