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
      nome: 'EDUARDO AUGUSTO',
      cargo: 'Aluno',
      imagem: 'https://github.com/augustoeduardo.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      nome: 'EDUARDO AUGUSTO',
      cargo: 'Aluno',
      imagem: 'https://github.com/augustoeduardo.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      nome: 'EDUARDO AUGUSTO',
      cargo: 'Aluno',
      imagem: 'https://github.com/augustoeduardo.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      nome: 'EDUARDO AUGUSTO',
      cargo: 'Aluno',
      imagem: 'https://github.com/augustoeduardo.png',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      nome: 'EDUARDO AUGUSTO',
      cargo: 'Aluno',
      imagem: 'https://github.com/augustoeduardo.png',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      nome: 'EDUARDO AUGUSTO',
      cargo: 'Aluno',
      imagem: 'https://github.com/augustoeduardo.png',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      nome: 'EDUARDO AUGUSTO',
      cargo: 'Aluno',
      imagem: 'https://github.com/augustoeduardo.png',
      time: times[6].nome
    },
  ]

  const [colaboradores, setColaboradores] = useState(inicial);

  function deletarColaborador() {
    console.log("Apagando colaborador")
  }
  

  function mudarcorDoTime (cor, nome){
    setTimes(times.map(time => {
      if (time.nome === nome) {
        time.cor = cor;
      }
      return time;
    }));
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map (time => time.nome)} aoColaboradorCadastrado={colaborador => setColaboradores([...colaboradores, colaborador])}/>

      <section className='times'>
      <h1>Minha Organização</h1>

      {times.map(time => <Time
        mudarCor = {mudarcorDoTime}
        key={time.nome}
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