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
            uf: "BA",
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
            n: "61",
            uf: "BA",
            email: "lucasadm1@gmail.com",
            celular: "77 88169-0606",
            foto: 'https://i.pravatar.cc/150?img=2',
            whatsapp: "77 88169-0606",
            integracao: "BC",
            status: 'INATIVO',
        },
        {
            id: 3,
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
            n: "61",
            uf: "BA",
            email: "lucasadm1@gmail.com",
            celular: "77 88169-0606",
            foto: 'https://i.pravatar.cc/150?img=2',
            whatsapp: "77 88169-0606",
            integracao: "BC",
            status: 'INATIVO',
        },
        {
            id: 4,
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
            n: "61",
            uf: "BA",
            email: "lucasadm1@gmail.com",
            celular: "77 88169-0606",
            foto: 'https://i.pravatar.cc/150?img=2',
            whatsapp: "77 88169-0606",
            integracao: "BC",
            status: 'INATIVO',
        },
        {
            id: 5,
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
            n: "61",
            uf: "BA",
            email: "lucasadm1@gmail.com",
            celular: "77 88169-0606",
            foto: 'https://i.pravatar.cc/150?img=2',
            whatsapp: "77 88169-0606",
            integracao: "BC",
            status: 'INATIVO',
        },

    ])

    const [frota, setFrota] = useState([
        {
            id: 1,
            model: "Titan 125CG",
            code: "M1",
            icon: '/images/frota/titan.png',
            marca: 'Honda',
            placa: "ABC 1234",
            km: "10",
            chassi: "dfghdfgd5fg45dfg",
            combustivel: "Alcool",
            ano: "2023",
            nmotor: "1452554",
            tipo: "Mota",
            status: "INATIVO",
            km: "10"
        },
        {
            id: 2,
            model: "Yaris",
            code: "C2",
            icon: '/images/frota/yaris.png',
            marca: 'Toyata',
            placa: "ABC 1234",
            km: "",
            chassi: "",
            combustivel: "",
            ano: "",
            nmotor: "",
            tipo: "",
            status: "ATIVO",
            km: "10"
        },
        {
            id: 3,
            model: "Uno",
            code: "C333",
            icon: '/images/frota/uno2.png',
            marca: 'Fiat',
            placa: "ABC 1234",
            km: "",
            chassi: "",
            combustivel: "",
            ano: "",
            nmotor: "",
            tipo: "",
            status: "ATIVO",
            km: "10"
        },
        {
            id: 4,
            model: "HB20",
            code: "C4",
            icon: '/images/frota/hb20.png',
            marca: 'Hunday',
            placa: "ABC 1234",
            km: "",
            chassi: "",
            combustivel: "",
            ano: "",
            nmotor: "",
            tipo: "",
            status: "ATIVO",
            km: "10"
        },
        {
            id: 5,
            model: "HB20",
            code: "C4",
            icon: '/images/frota/hb20.png',
            marca: 'Hunday',
            placa: 'abc1236',
            km: "",
            chassi: "",
            combustivel: "",
            ano: "",
            nmotor: "",
            tipo: "",
            status: "ATIVO",
            km: "10"
        },
        {
            id: 6,
            model: "Yaris",
            code: "C22",
            icon: '/images/frota/yaris.png',
            marca: 'Toyata',
            placa: "ABC 1234",
            km: "",
            chassi: "",
            combustivel: "",
            ano: "",
            nmotor: "",
            tipo: "",
            status: "ATIVO",
            km: "10"
        },
        {
            id: 7,
            model: "HB20",
            code: "C4",
            icon: '/images/frota/hb20.png',
            marca: 'Hunday',
            placa: "ABC 1234",
            km: "",
            chassi: "",
            combustivel: "",
            ano: "",
            nmotor: "",
            tipo: "",
            status: "ATIVO",
            km: "10"
        },
        {
            id: 8,
            model: "Uno",
            code: "C5",
            icon: '/images/frota/uno2.png',
            marca: 'Fiat',
            placa: "ABC 1234",
            km: "",
            chassi: "",
            combustivel: "",
            ano: "",
            nmotor: "",
            tipo: "",
            status: "ATIVO",
            km: "10"
        },
        {
            id: 9,
            model: "Uno",
            code: "C6",
            icon: '/images/frota/uno.png',
            marca: 'Fiat',
            placa: "ABC 1234",
            km: "",
            chassi: "",
            combustivel: "",
            ano: "",
            nmotor: "",
            tipo: "",
            status: "ATIVO",
            km: "10"
        },

        {
            id: 10,
            model: "Uno",
            code: "C9",
            icon: '/images/frota/uno.png',
            marca: 'Fiat',
            placa: "ABC 1234",
            km: "",
            chassi: "",
            combustivel: "",
            ano: "",
            nmotor: "",
            tipo: "",
            status: "ATIVO",
            km: "10"
        },
        {
            id: 11,
            model: "HB20",
            code: "C9",
            icon: '/images/frota/h20-write.png',
            marca: 'Fiat',
            placa: "ABC 1234",
            km: "",
            chassi: "",
            combustivel: "",
            ano: "",
            nmotor: "",
            tipo: "",
            status: "ATIVO",
            km: "10"
        },

    ])

    const [multa, setMulta] = useState([{
        id: 1,
        motorista_id: 1,
        veiculo_id: 1,
        data: "01 jan 2021",
        hora: "12:51",
        tipo: "Ultrapassagem em faixa de mão dupla",
        local: "BR 030 saida para Caetité",
        justificativa: "Não percebeu",
        placa: "ABC 1234",
        valor: "598,37",
        pagamento: "Á vista",
        p_empresa: "200,00",
        p_motorista: "398,37",
        pontos: "20",

    },
    {
        id: 2,
        motorista_id: 2,
        veiculo_id: 2,
        data: "05 mar 2023",
        hora: "08:52",
        tipo: "Usar celular em quanto dirige na via",
        local: "Rua camerino Neves",
        justificativa: "Não percebeu",
        placa: "ABC 4321",
        valor: "193,00",
        pagamento: "Á vista",
        p_empresa: "0,00",
        p_motorista: "193,00",
        pontos: "2",

    },
    {
        id: 2,
        motorista_id: 2,
        veiculo_id: 2,
        data: "05 mar 2023",
        hora: "08:52",
        tipo: "Usar celular em quanto dirige na via",
        local: "Rua camerino Neves",
        justificativa: "Não percebeu",
        placa: "ABC 4321",
        valor: "193,00",
        pagamento: "Á vista",
        p_empresa: "0,00",
        p_motorista: "193,00",
        pontos: "2",

    },
    {
        id: 2,
        motorista_id: 2,
        veiculo_id: 2,
        data: "05 mar 2023",
        hora: "08:52",
        tipo: "Usar celular em quanto dirige na via",
        local: "Rua camerino Neves",
        justificativa: "Não percebeu",
        placa: "ABC 4321",
        valor: "193,00",
        pagamento: "Á vista",
        p_empresa: "0,00",
        p_motorista: "193,00",
        pontos: "2",

    },
    {
        id: 2,
        motorista_id: 2,
        veiculo_id: 2,
        data: "05 mar 2023",
        hora: "08:52",
        tipo: "Usar celular em quanto dirige na via",
        local: "Rua camerino Neves",
        justificativa: "Não percebeu",
        placa: "ABC 4321",
        valor: "193,00",
        pagamento: "Á vista",
        p_empresa: "0,00",
        p_motorista: "193,00",
        pontos: "2",

    },

    ])

    /*     useEffect(() => {
            setMotorista(JSON.parse(localStorage.getItem('motorista')))
        }, [])
    
    
        useEffect(() => {
            localStorage.setItem('motorista', JSON.stringify(motorista));
        })
     */


    /* DADOS DE MOTORISTA */
    const sorteMotorista = motorista.sort((a, b) => (a.nome < b.nome ? -1 : 1));


    const addMotorista = (nome, CPF, RG, cargo, supervisor, ncnh, categoria, emissao, vencimento, endereco, bairro, cidade, n, uf, email, celular, whatsapp, integracao) => {
        setMotorista([...motorista, { id: motorista.length + 1, nome, CPF, RG, cargo, supervisor, ncnh, categoria, emissao, vencimento, endereco, bairro, cidade, n, uf, email, celular, whatsapp, integracao, status: "ATIVO", foto: `https://i.pravatar.cc/150?img=${motorista.length + 1}` }])
    }

    const deleteMotorista = (id) => {
        setMotorista(motorista.filter(motorista => motorista.id !== id))
    }

    const updateMotorista = (id, updatedMotorista) => {
        setMotorista(motorista.map((motorista) => motorista.id === id ? updatedMotorista : motorista))
    }


    const findMotorista = (idProcurar) => {
        return motorista.find(objeto => objeto.id == idProcurar);

    }


    /*DADOS DE FROTA*/


    const sorteFrota = frota.sort((a, b) => (a.id < b.id ? -1 : 1));


    const addFrota = (model, code, marca, placa, km, chassi, combustivel, ano, nmotor, tipo) => {


        setFrota([...frota, {
            id: frota.length + 1,
            model,
            code,
            marca,
            placa,
            km,
            chassi,
            combustivel,
            ano,
            nmotor,
            tipo,
            icon: '/images/frota/h20-write.png'

        }])
    }

    const updateFrota = (id, updatedFrota) => {
        setFrota(frota.map((frota) => frota.id == id ? updatedFrota : frota))
    }

    const findFrota = (idProcurar) => {
        return frota.find(objeto => objeto.id == idProcurar);

    }



    const sorteMulta = multa.sort((a, b) => (a.id < b.id ? -1 : 1));

    const addMulta = (veiculo_id, motorista_id, data, hora, tipo, local, justificativa, placa, valor, pagamento, p_empresa, p_motorista, pontos) => {

        console.log(veiculo_id, motorista_id, data, hora, tipo, local, justificativa, placa, valor, pagamento, p_empresa, p_motorista, pontos)

        setMulta([...multa, {
            id: multa.length + 1,
            veiculo_id, motorista_id, data, hora, tipo, local, justificativa, placa, valor, pagamento, p_empresa, p_motorista, pontos
        }])
    }

    const updateMulta = (id, updatedMulta) => {
        setMulta(multa.map((multa) => multa.id == id ? updatedMulta : multa))
    }

    const deleteMulta = (id) => {
        setMulta(multa.filter(multa => multa.id !== id))
    }







    return (
        <DataContext.Provider value={{
            sorteMotorista, addMotorista, updateMotorista, deleteMotorista,findMotorista,
            sorteFrota, updateFrota, addFrota,findFrota,
            sorteMulta, addMulta,updateMulta,deleteMulta
        }}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;