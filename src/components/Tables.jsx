/* eslint-disable react/jsx-key */
const squads = [
  {
    id: 1,
    color: 'Laranja',
    colorValue: 'bg-orange-500',
    courses: [
      'Administração - Diurno',
      'Administração - Noturno',
      'Comunicação Social',
    ],
    students: '88',
    coordinators: [''],
  },
  {
    id: 2,
    color: 'Vermelha',
    colorValue: 'bg-red-500',
    courses: [
      'Ciência da Computação',
      'Engenharia Civil',
      'Engenharia de Produção',
      'Sistemas de Informação',
    ],
    students: '89',
    coordinators: [''],
  },
  {
    id: 3,
    color: 'Roxa',
    colorValue: 'bg-purple-500',
    courses: ['Enfermagem', 'Medicina'],
    students: '84',
    coordinators: [''],
  },
  {
    id: 4,
    color: 'Amarela',
    colorValue: 'bg-yellow-500',
    courses: ['Ciências Contábeis', 'Engenharia de Software'],
    students: '84',
    coordinators: [''],
  },
  {
    id: 5,
    color: 'Verde',
    colorValue: 'bg-green-500',
    courses: ['Letras', 'Matemática', 'Psicologia'],
    students: '86',
    coordinators: [''],
  },
]

const coursesAndStudents = [
  {
    id: 1,
    name: 'Administração - Diurno',
    students: '18',
  },
  {
    id: 2,
    name: 'Administração - Noturno',
    students: '23',
  },
  {
    id: 3,
    name: 'Ciência da Computação',
    students: '37',
  },
  {
    id: 4,
    name: 'Ciências Contábeis',
    students: '29',
  },
  {
    id: 5,
    name: 'Comunicação Social – Publ. e Propaganda',
    students: '47',
  },
  {
    id: 6,
    name: 'Enfermagem',
    students: '14',
  },
  {
    id: 7,
    name: 'Engenharia Civil',
    students: '11',
  },
  {
    id: 8,
    name: 'Engenharia de Produção',
    students: '13',
  },
  {
    id: 9,
    name: 'Engenharia de Software',
    students: '55',
  },
  {
    id: 10,
    name: 'Letras (Port./Inglês)',
    students: '21',
  },
  {
    id: 11,
    name: 'Matemática',
    students: '14',
  },
  {
    id: 12,
    name: 'Medicina',
    students: '70',
  },
  {
    id: 13,
    name: 'Psicologia',
    students: '52',
  },
  {
    id: 14,
    name: 'Sistema de Informação',
    students: '29',
  },
]

const prizeDraw = [
  {
    id: 1,
    color: 'Amarelo',
    colorValue: 'bg-yellow-500',
    classValue: 18,
    presentation: '1ª Equipe',
    entity: 'Creche',
  },
  {
    id: 2,
    color: 'Laranja',
    colorValue: 'bg-orange-500',
    classValue: 19,
    presentation: '2ª Equipe',
    entity: 'Lar de Idosos',
  },
  {
    id: 3,
    color: 'Roxo',
    colorValue: 'bg-purple-500',
    classValue: 20,
    presentation: '3ª Equipe',
    entity: 'Deficientes Visuais',
  },
  {
    id: 4,
    color: 'Verde',
    colorValue: 'bg-green-500',
    classValue: 21,
    presentation: '4ª Equipe',
    entity: 'Pacientes com Câncer',
  },
  {
    id: 5,
    color: 'Vermelho',
    colorValue: 'bg-red-500',
    classValue: 22,
    presentation: '5ª Equipe',
    entity: 'Portadores de Necessidades Especiais',
  },
]

const points = [
  {
    id: 1,
    units: 80,
    percentage: 100,
    points: 5000,
  },
  {
    id: 2,
    units: 64,
    percentage: 80,
    points: 4000,
  },
  {
    id: 3,
    units: 40,
    percentage: 50,
    points: 2500,
  },
  {
    id: 4,
    units: 16,
    percentage: 20,
    points: 1000,
  },
  {
    id: 5,
    units: '< 16',
    percentage: '< 20',
    points: 0,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function TableSquads() {
  return (
    <table className="w-full table-auto">
      <thead>
        <tr>
          <th className="border px-4 py-2">Equipe</th>
          <th className="border px-4 py-2">Cursos</th>
          <th className="border px-4 py-2">Alunos</th>
          <th className="border px-4 py-2">Coordenadores</th>
        </tr>
      </thead>
      <tbody>
        {squads.map((row) => (
          <tr key={row.id}>
            <td className="border px-4 py-2">{row.color}</td>
            <td className="border px-4 py-2">
              {row.courses.map((course) => (
                <div>{course}</div>
              ))}
            </td>
            <td className="border px-4 py-2">{row.students}</td>
            <td className="border px-4 py-2">
              {row.coordinators.map((coordinator) => (
                <div>{coordinator}</div>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export function TableCoursesAndStudents() {
  return (
    <table className="w-full table-auto">
      <thead>
        <tr>
          <th className="border px-4 py-2">Curso</th>
          <th className="border px-4 py-2">Alunos</th>
        </tr>
      </thead>
      <tbody>
        {coursesAndStudents.map((row) => (
          <tr>
            <td className="border px-4 py-2">{row.name}</td>
            <td className="border px-4 py-2">{row.students}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export function TablePrizeDraw() {
  return (
    <table className="w-full table-auto">
      <thead>
        <tr>
          <th className="border px-4 py-2">Cor</th>
          <th className="border px-4 py-2">Valor</th>
          <th className="border px-4 py-2">Apresentação</th>
          <th className="border px-4 py-2">Entidade</th>
        </tr>
      </thead>
      <tbody>
        {prizeDraw.map((row) => (
          <tr>
            <td className="border px-4 py-2">{row.color}</td>
            <td className="border px-4 py-2">{row.classValue}</td>
            <td className="border px-4 py-2">{row.presentation}</td>
            <td className="border px-4 py-2">{row.entity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export function TablePoints() {
  return (
    <table className="w-full table-auto">
      <thead>
        <tr>
          <th className="border px-4 py-2">
            Quantidade de conjuntos entregues
          </th>
          <th className="border px-4 py-2">Porcentagem</th>
          <th className="border px-4 py-2">Pontuação</th>
        </tr>
      </thead>
      <tbody>
        {points.map((row) => (
          <tr>
            <td className="border px-4 py-2">{row.units}</td>
            <td className="border px-4 py-2">{row.percentage}%</td>
            <td className="border px-4 py-2">{row.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
