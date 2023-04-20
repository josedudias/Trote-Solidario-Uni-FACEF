import React, { useState } from 'react'

export default function Pontuacao() {
  const [qtdKits, setQtdKits] = useState()

  const [pontos, setPontos] = useState(0)
  const [adicionalPontos, setAdicionalPontos] = useState(0)

  const [showItensAdicionais, setShowItensAdicionais] = useState(false)
  const [showCheckbox, setShowCheckbox] = useState(false)

  const [qtdConjunto, setQtdConjunto] = useState()
  const [qtdKit, setQtdKit] = useState()
  const [qtdSuplemento, setQtdSuplemento] = useState()
  const [qtdArroz, setQtdArroz] = useState()

  const [lastQtdConjunto, setLastQtdConjunto] = useState(0)
  const [lastQtdKit, setLastQtdKit] = useState(0)
  const [lastQtdSuplemento, setLastQtdSuplemento] = useState(0)
  const [lastQtdArroz, setLastQtdArroz] = useState(0)

  const [isDisabledConjunto, setIsDisabledConjunto] = useState(true)
  const [isDisabledKit, setIsDisabledKit] = useState(true)
  const [isDisabledSuplemento, setIsDisabledSuplemento] = useState(true)
  const [isDisabledArroz, setIsDisabledArroz] = useState(true)

  const condicional = (qtdKits) => {
    setPontos(0)
    let kits = parseInt(qtdKits)
    if (kits >= 80) {
      setPontos(5000)
      setShowItensAdicionais(true)
    } else if (kits < 80 && kits >= 64) {
      setPontos(4000)
      setShowItensAdicionais(false)
      setShowCheckbox(false)
    } else if (kits < 64 && kits >= 40) {
      setPontos(3000)
      setShowItensAdicionais(false)
      setShowCheckbox(false)
    } else if (kits < 40 && kits >= 16) {
      setPontos(1000)
      setShowItensAdicionais(false)
      setShowCheckbox(false)
    } else if (kits < 16) {
      setPontos(0)
      setShowItensAdicionais(false)
    } else {
      setPontos(0)
      setShowItensAdicionais(false)
      setShowCheckbox(false)
    }
  }

  const adicional = () => {
    let total = 0

    if (qtdConjunto > 0) {
      total += qtdConjunto * 50
    }

    if (qtdKit > 0) {
      total += qtdKit * 25
    }

    if (qtdSuplemento > 0) {
      total += qtdSuplemento * 10
    }

    if (qtdArroz > 0) {
      total += qtdArroz * 5
    }

    if (
      qtdConjunto !== lastQtdConjunto ||
      qtdKit !== lastQtdKit ||
      qtdSuplemento !== lastQtdSuplemento ||
      qtdArroz !== lastQtdArroz
    ) {
      setAdicionalPontos(pontos + total)
      setLastQtdConjunto(qtdConjunto)
      setLastQtdKit(qtdKit)
      setLastQtdSuplemento(qtdSuplemento)
      setLastQtdArroz(qtdArroz)
    }
  }

  const handleCheckbox = (e) => {
    const { name, checked } = e.target
    switch (name) {
      case 'conjunto':
        checked ? setIsDisabledConjunto(false) : setIsDisabledConjunto(true)
        break
      case 'kit':
        checked ? setIsDisabledKit(false) : setIsDisabledKit(true)
        break
      case 'suplemento':
        checked ? setIsDisabledSuplemento(false) : setIsDisabledSuplemento(true)
        break
      case 'arroz':
        checked ? setIsDisabledArroz(false) : setIsDisabledArroz(true)
        break
      default:
        break
    }
  }

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="flex flex-col items-center justify-center">
        <p className="inline bg-gradient-to-r from-slate-800 via-sky-400  to-slate-400 bg-clip-text text-center font-display text-5xl tracking-tight text-transparent dark:from-slate-200 dark:via-sky-400 dark:to-slate-200">
          Calculadora de Pontos
        </p>
        <p className="mt-3 text-2xl tracking-tight text-slate-800 dark:text-slate-200">
          Trote Solidário 2023
        </p>
      </div>
      <div className="bg-white px-4 py-8 shadow dark:border-gray-700 dark:bg-gray-800 sm:rounded-lg sm:px-10">
        <div className="mb-6 space-y-6">
          <div>
            <label
              htmlFor="kits"
              className="block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Informe o total de kits entregues
            </label>
            <div className="mt-1">
              <input
                id="kits"
                value={qtdKits}
                onChange={(e) => setQtdKits(e.target.value)}
                type="number"
                min="0"
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            {showCheckbox === false && pontos > 0 && (
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-500">
                  Seu time fez {pontos} pontos
                </p>
              </div>
            )}
            {showCheckbox === true && (
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-200">
                  Seu time fez {adicionalPontos} pontos
                </p>
              </div>
            )}
          </div>
        </div>
        {showItensAdicionais === true && (
          <>
            <div id="adicional">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                onClick={() => (
                  setAdicionalPontos(pontos), setShowCheckbox(true)
                )}
              />
              <label className="ml-2 mr-1 text-sm font-medium text-gray-900 dark:text-gray-300">
                Items adicionais Kit Alimentação + Suplemento + Arroz
              </label>
            </div>
            {showCheckbox === true && (
              <div id="checkbox" className="mb-2 space-y-2">
                <div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="conjunto"
                      className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                      name="conjunto"
                      onChange={handleCheckbox}
                    />
                    <label className="ml-2 mr-1 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Conjunto Padrão
                    </label>
                    <input
                      type="number"
                      id="qtdConjunto"
                      value={qtdConjunto}
                      className="appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      min={0}
                      onChange={(e) => setQtdConjunto(e.target.value)}
                      disabled={isDisabledConjunto}
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="kit"
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                    name="kit"
                    onChange={handleCheckbox}
                  />

                  <label className="ml-2 mr-1 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Kit Alimentação
                  </label>
                  <input
                    type="number"
                    id="qtdKit"
                    value={qtdKit}
                    className="appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    min={0}
                    onChange={(e) => setQtdKit(e.target.value)}
                    disabled={isDisabledKit}
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="suplemento"
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                    name="suplemento"
                    onChange={handleCheckbox}
                  />
                  <label className="ml-2 mr-1 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Suplemento
                  </label>
                  <input
                    type="number"
                    id="qtdSuplemento"
                    value={qtdSuplemento}
                    className="appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    min={0}
                    onChange={(e) => setQtdSuplemento(e.target.value)}
                    disabled={isDisabledSuplemento}
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="arroz"
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                    name="arroz"
                    onChange={handleCheckbox}
                  />
                  <label className="ml-2 mr-1 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Arroz
                  </label>
                  <input
                    type="number"
                    id="qtdArroz"
                    value={qtdArroz}
                    className="appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    min={0}
                    onChange={(e) => setQtdArroz(e.target.value)}
                    disabled={isDisabledArroz}
                  />
                </div>
              </div>
            )}
          </>
        )}
        <button
          onClick={() => {
            showCheckbox === false ? condicional(qtdKits) : adicional()
          }}
          className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Calcular os pontos
        </button>
        <div>
          <p id="pontos"></p>
        </div>
      </div>
    </div>
  )
}
