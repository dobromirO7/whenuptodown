export const App = () => {
  const primery = [
    { nick: "primer1", name: "primer 1", description: "Описание примера 1" },
    { nick: "primer2", name: "primer 2", description: "Описание примера 2" },
    { nick: "primer3", name: "primer 3", description: "Описание примера 3" },
    { nick: "primer4", name: "primer 4", description: "Описание примера 4" },
    { nick: "primer5", name: "primer 5", description: "Описание примера 5" },
    { nick: "primer6", name: "primer 6", description: "Описание примера 6" },
    { nick: "primer7", name: "primer 7", description: "Описание примера 7" },
  ];

  return (
    <div>
      <div>
        <h1 className="my-class1">Поднял? Урони!</h1>
      </div>
      {primery.map((primer) => {
        return (
          <div key={primer.nick}>
            <h2>{primer.name}</h2>
            <p>{primer.description}</p>
          </div>
        );
      })}
      )
    </div>
  );
};
