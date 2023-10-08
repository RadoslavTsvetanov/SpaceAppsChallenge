import Spline from '@splinetool/react-spline';
import React from 'react';

export default function App() {
  const [isOpen, SetIsOpen] = React.useState(true);
  const planet = React.useRef();

  const stopRotation = () => {
    planet.current.rotation.y = 0;
  }

  function onLoad(spline) {
    planet.current = spline.findObjectByName('Planet')
  }

  function OnMouseEnter(e) {
    console.log(e)
  }

  const infoBoxStyle = {
    display: isOpen ? 'block' : 'none',
    background: '#fff',
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '100%', // Adjust the width as needed
    maxWidth: '400px', // Set a maximum width if necessary
    height: 'auto',
    lineHeight: '1.5',
    color: 'black',
    margin: '10px', // Add margin to separate the boxes
  };

  return (
    <div style={{ fontSize: '10px' }}>
      <div style={infoBoxStyle}>
        Западна Тракиния – най-големият континент на планетата. Простира се от екватора до умерените ширини. В центъра му се намира голяма планина – Тера Магна, от която извират три реки – Бревия, Ленто (на десния ѝ бряг има огромно едноименно мочурище), Валд.
      </div>
      <div style={infoBoxStyle}>
        Коразория – Разположен е в южното полукълбо, директно южно от Източна Тракиния. Този континент е разсечен през средата от дългата планинска верига Алкалб. От нея извират 5 реки - Аморе, Вита, Анима, Пасион и Серца. Между Пасион и Аморе се намира блатото Пантано
      </div>
      <div style={infoBoxStyle}>
        Сиркули – специфичното за този континент е гигантското езеро точно в средата му което се казва Ротондис. От него извират и 6-те реки на континента, а те са Игуаис Ена, Игуаис Дио, Игуаис Триа, Игуаис Тесера, Игуаис Пенте и Игуаис Екси. Специфичното за Сиркули е че въпреки екваториалния си климат съдържа 2 от 3 пустини на Астрора. Те са с имена: Летоле и Мидбар.
      </div>
      <div style={infoBoxStyle}>
        Източна Тракиния – в средата му се намира планината Лориент, от която тръгва река Тохогава. Непосредствено до скалния масив се намира голямото езеро Хамизрач, от което на север и на юг тръгват реките Лакус и Геминус. Континентът се намира почти изцяло в умерения пояс със съвсем малка част от него в екваториалния.
      </div>

      <Spline scene="https://prod.spline.design/ay16tyoXtayCa8Pv/scene.splinecode" onLoad={onLoad} onMouseDown={OnMouseEnter} />
      <button onClick={() => { SetIsOpen(!isOpen) }}>Покажи информация</button>
    </div>
  );
}
