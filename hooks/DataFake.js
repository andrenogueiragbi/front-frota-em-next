'use client'
import { createContext, useEffect, useState } from 'react';


export const DataContext = createContext()

const DataContextProvider = (props) => {

    const [motorista, setMotorista] = useState([
        {
            id: 1,
            nome: "Andre Pereira Nogueira",
            CPF: "04124882563",
            RG: "1428204748",
            cargo: "Supervisor",
            supervisor: "Ivanaldo",
            ncnh: "102030456",
            categoria: "AB",
            vencimento: "2021-01-01",
            endereco: "Rua alcebiades pereira costa",
            bairro: "Alvorada",
            cidade: "Guanambi",
            n: "61",
            uf: "Bahia",
            email: "andrepereiragbi@gmail.com",
            celular: "77 99977-0606",
            foto: 'https://i.pravatar.cc/150?img=1',
            whatsapp: "77 99977-0606",
            integracao: "DF",
            status: 'ATIVO',

        },
        {
            id: 2,
            nome: "Lucas Vieira da Silva",
            CPF: "0412478856",
            RG: "2328204748",
            cargo: "Desenvolvedor",
            supervisor: "André",
            ncnh: "102030456",
            categoria: "AB",
            vencimento: "2021-01-01",
            endereco: "Rua principal",
            bairro: "BHN",
            cidade: "Guanambi",
            n: "78",
            uf: "Bahia",
            email: "lucasadm1@gmail.com",
            celular: "77 88169-0606",
            foto: 'https://i.pravatar.cc/150?img=2',
            whatsapp: "77 88169-0606",
            integracao: "BC",
            status: 'INATIVO',
        }
    ])


/*     useEffect(() => {
        setMotorista(JSON.parse(localStorage.getItem('motorista')))
    }, [])


    useEffect(() => {
        localStorage.setItem('motorista', JSON.stringify(motorista));
    })
 */

    const sorteMotorista = motorista.sort((a, b) => (a.nome < b.nome ? -1 : 1));


    const addMotorista = (nome, CPF, RG, cargo, supervisor, ncnh, categoria, emissao, vencimento, endereco, bairro, cidade, n, uf, email, celular, whatsapp, integracao) => {
        setMotorista([...motorista, { id: motorista.length + 1, nome, CPF, RG, cargo, supervisor, ncnh, categoria, emissao, vencimento, endereco, bairro, cidade, n, uf, email, celular, whatsapp, integracao, status:"ATIVO", foto: `https://i.pravatar.cc/150?img=${motorista.length + 1}` }])
    }

     const deleteMotorista = (id) => {
        setMotorista(motorista.filter(motorista => motorista.id !== id))
    }

    const updateMotorista = (id, updatedMotorista) => {
        setMotorista(motorista.map((motorista) => motorista.id === id ? updatedMotorista : motorista))
    } 




    return (
        <DataContext.Provider value={{ sorteMotorista,addMotorista,updateMotorista,deleteMotorista,/*  addEmployee, deleteEmployee, updateEmployee  */ }}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;