import React, { useEffect, useState } from "react"; 
import { IonPage, IonHeader, IonToolbar, IonGrid, IonRow, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonTitle, IonImg, IonButton, IonList } from "@ionic/react";
import './Lojas.css';

const Lojas: React.FC = () => {
  const listaLojas = [{nome: "Loja 1", imagem:"https://st2.depositphotos.com/1033329/5394/i/600/depositphotos_53946361-stock-photo-viana-do-castelo.jpg", endereco: "Rua A, 123", cidade: "Viana"},
   {nome: "Loja 2", imagem:"https://images.unsplash.com/photo-1709421017696-292cac5d39ca?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", endereco: "Rua B, 456", cidade: "Porto"},
   {nome: "Loja 3", imagem:"https://images.unsplash.com/photo-1693580760190-a795f44cb6c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fEJyYWdhfGVufDB8fDB8fHww", endereco: "Rua C, 789", cidade: "Braga"}];

  const exibirDetalhesLoja = (loja: any) => {
    // Lógica para exibir detalhes da loja, como um modal
    console.log("Exibindo detalhes da loja:", loja);
  };

  const [lojas, setLojas] = useState([]);
    useEffect(() => {
      const fetchlojas = async () => {
        try {
          const response = await fetch('http://localhost:8100/api/Lojas');
          const data = await response.json();
          setLojas(data);
        } catch (error) {
          console.error('erro ao buscar lojas')
        };
  };

  fetchlojas();
  }, []);


  const navigateFrota = () => {
    history.push('/frota'); 
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lojas</IonTitle>
        </IonToolbar>
       </IonHeader>
       <IonContent>
        <IonGrid>
          <IonRow>
            {listaLojas.map((loja, index) => (
              <IonGrid key={index}>
                <IonCard color="dark" onClick={() => exibirDetalhesLoja(loja)}>
                  <IonCardHeader color="primary">
                    <IonCardTitle>{loja.nome}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonImg src={loja.imagem}></IonImg>
                    <p>Endereço: {loja.endereco}</p>
                    <p>Cidade: {loja.cidade}</p>
                    <IonButton expand="full" onClick={navigateFrota} routerLink="/Frota">
          Ver Frota
        </IonButton>
                  </IonCardContent>
                </IonCard>
              </IonGrid>
            ))}
            </IonRow>
            </IonGrid>
            </IonContent>
            </IonPage>
  );
};
export default Lojas;
